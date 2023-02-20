export function getData(count) {
    const countries = ['US', 'Canada', 'Germany', 'UK', 'Japan', 'Italy', 'Greece'];
    const dt = new Date();
    const year = dt.getFullYear();
    let data = [];
    for (let i = 0; i < count; i++) {
      data.push({
        hidden: i % 2,
        id: i,
        country: countries[Math.round(Math.random() * (countries.length - 1))],
        date: new Date(year, i % 12, i % 28),
        downloads: Math.round(Math.random() * 10000),
        sales: +(Math.random() * 10000).toFixed(2),
        active: i % 4 === 0
      });
    }
    return data;
  }
      