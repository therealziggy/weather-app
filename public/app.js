const form = document.getElementById('search-form');
const cityInput = document.getElementById('city-input');
const result = document.getElementById('result');
const locationEl = document.getElementById('location');
const tempEl = document.getElementById('temp');
const descEl = document.getElementById('desc');
const errorEl = document.getElementById('error');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (!city) return;

  errorEl.textContent = '';
  result.classList.add('hidden');

  try {
    const res = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Unknown error');

    locationEl.textContent = `${data.city}${data.country ? ', ' + data.country : ''}`;
    tempEl.textContent = `${data.temp} °C`;
    descEl.textContent = data.description ? data.description : '';
    result.classList.remove('hidden');
  } catch (err) {
    errorEl.textContent = err.message;
  }
});
