document.addEventListener('DOMContentLoaded', extension);

function extension() {
  function setupConverter(
    inputId,
    fromLabelId,
    toLabelId,
    outputId,
    switchBtnId,
    ratio,
    decimals
  ) {
    const input = document.getElementById(inputId);
    const fromLabel = document.getElementById(fromLabelId);
    const toLabel = document.getElementById(toLabelId);
    const output = document.getElementById(outputId);
    const switchBtn = document.getElementById(switchBtnId);

    let isSwitched = false;

    function calculate() {
      const value = parseFloat(input.value);
      if (isNaN(value) || value === 0) {
        output.textContent = (0).toFixed(decimals);
        return;
      }

      const result = isSwitched ? value / ratio : value * ratio;
      output.textContent = result.toFixed(decimals);
    }

    function switchDirection() {
      isSwitched = !isSwitched;

      const tempLabel = fromLabel.textContent;
      fromLabel.textContent = toLabel.textContent;
      toLabel.textContent = tempLabel;

      input.value = '';
      calculate();
      input.focus();
    }

    input.addEventListener('input', calculate);
    switchBtn.addEventListener('click', switchDirection);
  }

  setupConverter(
    // Ft <-> m
    'input-ft',
    'label-from-ft',
    'label-to-m',
    'output-m',
    'switch-ftm',
    0.3048,
    2
  );

  setupConverter(
    // in <-> cm
    'input-in',
    'label-from-in',
    'label-to-cm',
    'output-cm',
    'switch-incm',
    2.54,
    2
  );

  setupConverter(
    'input-ft2',
    'label-from-ft2',
    'label-to-m2',
    'output-m2',
    'switch-ft2m2',
    0.0929,
    2
  );

  setupConverter(
    'input-in2',
    'label-from-in2',
    'label-to-cm2',
    'output-cm2',
    'switch-in2cm2',
    6.4516,
    2
  );

  setupConverter(
    'input-lb',
    'label-from-lb',
    'label-to-kg',
    'output-kg',
    'switch-lbkg',
    0.45,
    2
  );

  setupConverter(
    'input-oz',
    'label-from-oz',
    'label-to-g',
    'output-g',
    'switch-ozg',
    28.35,
    4
  );

  setupConverter(
    'input-gal',
    'label-from-gal',
    'label-to-L',
    'output-L',
    'switch-galL',
    3.79,
    4
  );

  setupConverter(
    'input-cup',
    'label-from-cup',
    'label-to-ml',
    'output-ml',
    'switch-cupml',
    236.59,
    4
  );

  document.getElementById('close-btn').addEventListener('click', () => {
    window.close();
  });

  const selectType = document.getElementById('conversionType');

  function filter() {
    const selectedType = selectType.value;
    document.querySelectorAll('.converter-row').forEach((row) => {
      //access each row's data type value
      const type = row.dataset.type;
      if (type !== selectedType) {
        row.classList.add('hidden');
      } else {
        row.classList.remove('hidden');
      }
    });
  }
  document.addEventListener('DOMContentLoaded', filter);
  selectType.addEventListener('change', filter);
  filter();
}
