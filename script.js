// Get the container for the chemical cards
const chemicalCardsContainer = document.getElementById("chemical-cards");

function createChemicalCard(chemical) {
  const card = document.createElement("div");
  card.className = "bg-white p-4 rounded-lg shadow-md relative border-l-4";
  card.style.borderColor = chemical.highlight_colour;

  const icon = document.createElement("i");
  icon.className = `${chemical.chemical.icon} text-3xl text-gray-600 absolute top-2 right-2`;

  const content = document.createElement("div");

  const title = document.createElement("h4");
  title.className = "text-lg font-semibold text-gray-800";
  title.textContent = chemical.chemical.layman_name;

  const biomarker = document.createElement("p");
  biomarker.className = "text-sm text-gray-600";
  biomarker.innerHTML = `<strong>Technical name:</strong> ${chemical.biomarker.name}`;

  const commonUses = document.createElement("p");
  commonUses.className = "text-sm text-gray-600";
  commonUses.innerHTML = `<strong>Common Uses:</strong> ${chemical.chemical.common_uses}`;

  const link = document.createElement("a");
  link.href = chemical.info_link;
  link.className = "text-blue-500 hover:underline";
  link.textContent = "More Info";

  content.appendChild(title);
  content.appendChild(biomarker);
  content.appendChild(commonUses);
  content.appendChild(link);

  card.appendChild(icon);
  card.appendChild(content);

  return card;
}

function displayChemicalCards(filteredChemicals) {
  // Clear existing cards
  chemicalCardsContainer.innerHTML = "";

  // Create and append new cards
  filteredChemicals.forEach((chemical) => {
    const card = createChemicalCard(chemical);
    chemicalCardsContainer.appendChild(card);
  });
}

// Handle chemical group selection change
document
  .querySelectorAll('#group-filters input[type="radio"]')
  .forEach((radio) => {
    radio.addEventListener("change", (e) => {
      const selectedGroup = e.target.value;
      const filteredChemicals = selectedGroup
        ? chemicals.filter((chem) => chem.layman_group === selectedGroup)
        : chemicals;

      // Display cards for the filtered chemicals
      displayChemicalCards(filteredChemicals);

      // Reset UI when "All groups" is selected or when multiple chemicals are available
      if (selectedGroup === "" || filteredChemicals.length > 1) {
        // Reset to initial state when "All groups" is selected
        document.getElementById("chemical-group").textContent = "";
        const linkElement = document
          .getElementById("chemical-link")
          .querySelector("a");
        linkElement.classList.add("hidden");
        linkElement.href = "";

        // Show all matrix options
        document.querySelectorAll("#matrix-filters label").forEach((label) => {
          label.classList.remove("hidden");
        });

        // Show all units options
        document.querySelectorAll("#units-filters label").forEach((label) => {
          label.classList.remove("hidden");
        });

        // Clear period filters
        document.getElementById("period-filters").innerHTML = "";

        // Show all stats options
        document.querySelectorAll("#stats-filters label").forEach((label) => {
          label.classList.remove("hidden");
        });

        // Uncheck all radio buttons and checkboxes
        document
          .querySelectorAll('input[type="radio"], input[type="checkbox"]')
          .forEach((input) => {
            if (input.name !== "group") {
              // Don't uncheck the "All groups" radio
              input.checked = false;
            }
          });
      } else {
        // Only case left is when filteredChemicals.length === 1
        // If there's only one chemical in the group, select it automatically
        const singleChemical = filteredChemicals[0];
        updateAvailableFilters(singleChemical); // Ensure filters are updated
      }
    });
  });

// Update available filters based on selected chemical
function updateAvailableFilters(chemical) {
  if (!chemical) {
    // Clear chemical group and link
    const chemicalGroupDiv = document.getElementById("chemical-group");
    chemicalGroupDiv.textContent = "";
    const linkElement = document
      .getElementById("chemical-link")
      .querySelector("a");
    linkElement.classList.add("hidden");
    linkElement.href = "";
    return;
  }

  // Update chemical group display
  const chemicalGroupDiv = document.getElementById("chemical-group");
  chemicalGroupDiv.textContent = chemical ? chemical.layman_group : "";

  // Update chemical link
  const linkElement = document
    .getElementById("chemical-link")
    .querySelector("a");
  if (chemical.info_link) {
    linkElement.href = chemical.info_link;
    linkElement.classList.remove("hidden");
  } else {
    linkElement.classList.add("hidden");
    linkElement.href = "";
  }

  // Helper function to handle single option cases
  function handleSingleOption(inputs) {
    const visibleInputs = Array.from(inputs).filter(
      (input) => !input.parentElement.classList.contains("hidden")
    );

    if (visibleInputs.length === 1) {
      visibleInputs[0].checked = true;
    } else {
      inputs.forEach((input) => {
        input.checked = false;
      });
    }
  }

  // Helper function to update "no options" message
  function updateNoOptionsMessage(container, visibleCount) {
    const message = container.querySelector("p");
    if (message) {
      message.classList.toggle("hidden", visibleCount > 0);
    }
  }

  // Update matrix filters
  const matrixInputs = document.querySelectorAll(
    "#matrix-filters input[type='radio']"
  );
  const matrices = [
    ...new Set(chemical.samples.map((sample) => sample.matrix)),
  ];
  let visibleMatrixCount = 0;
  matrixInputs.forEach((input) => {
    const label = input.parentElement;
    const isVisible = matrices.includes(input.value);
    label.classList.toggle("hidden", !isVisible);
    if (isVisible) visibleMatrixCount++;
  });
  updateNoOptionsMessage(
    document.getElementById("matrix-filters"),
    visibleMatrixCount
  );
  handleSingleOption(matrixInputs);

  // Update units filters
  const unitsInputs = document.querySelectorAll("#units-filters input");
  // Get unique units from all samples
  const units = [
    ...new Set(
      chemical.samples
        .map((sample) => {
          let unit = sample.measurement.units;
          if (unit === "µg As/L") unit = "ug/L";
          if (unit === "µg/g creatinine") unit = "ug/g creatinine";
          return unit ? unit.replace("µg", "ug") : null;
        })
        .filter(Boolean)
    ),
  ];
  unitsInputs.forEach((input) => {
    const label = input.parentElement;
    label.classList.toggle("hidden", !units.includes(input.value));
  });
  handleSingleOption(unitsInputs);

  // Update period filters
  const periodFiltersDiv = document.getElementById("period-filters");
  periodFiltersDiv.innerHTML = "";
  // Get unique collection periods from all samples
  const periods = [
    ...new Set(chemical.samples.map((sample) => sample.chms_cycle_years)),
  ];

  // Create checkbox for each unique period
  periods.forEach((period) => {
    const label = document.createElement("label");
    label.className =
      "flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = period;
    input.className =
      "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500";
    label.appendChild(input);
    label.appendChild(document.createTextNode(` ${period}`));
    periodFiltersDiv.appendChild(label);
  });

  const periodInputs = document.querySelectorAll("#period-filters input");
  handleSingleOption(periodInputs);

  // Update stats filters
  const statsInputs = document.querySelectorAll("#stats-filters input");
  // Get first sample for stats (we can update this later to check all samples)
  const firstSample = chemical.samples[0];
  statsInputs.forEach((input) => {
    const label = input.parentElement;
    let hasValue = false;
    if (input.value === "gm")
      hasValue = firstSample.statistical_values.gm.value !== null;
    if (input.value === "p50")
      hasValue = firstSample.statistical_values.p50.value !== null;
    if (input.value === "p95")
      hasValue = firstSample.statistical_values.p95.value !== null;
    if (input.value === "ci") hasValue = firstSample.sample_data.df !== null;
    label.classList.toggle("hidden", !hasValue);
  });
  handleSingleOption(statsInputs);
}
