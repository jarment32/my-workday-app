function exportToExcel() {
    const records = JSON.parse(localStorage.getItem('records')) || [];
    if (records.length === 0) {
        alert('No hay registros para exportar.');
        return;
    }

    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Usuario,Día,Opción 1,Opción 2\n";

    records.forEach(record => {
        const row = `${record.user},${record.day},${record.option1},${record.option2}`;
        csvContent += row + "\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "jornadas.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
