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

  document.getElementById('close-btn').addEventListener('click', () => {
    window.close();
  });
}
