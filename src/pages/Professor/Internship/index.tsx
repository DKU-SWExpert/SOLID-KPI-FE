import {CChartBar} from '@coreui/react-chartjs';
import {CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow} from '@coreui/react';

const ProfessorInternship = () => {
    const years = ['2024', '2025', '2026', '2027', '2028', '2029'];
    const userCounts = [60, 200, 400, 800, 1100, 1100];
    const targets = [0, 250, 500, 750, 1000, 1000];
    const issueRates = [4.1, 5.6, 7.1, 8.6, 10.1, 11.6];

    const chartData = {
        labels: years,
        datasets: [
            {
                type: 'bar' as const,
                label: '총 User 수',
                data: userCounts,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
            },
            {
                type: 'line' as const,
                label: '이수율 (%)',
                data: issueRates,
                borderColor: '#FFC107',
                borderWidth: 2,
                tension: 0.4,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: '인턴십 이슈율 지표',
            },
        },
    };

    return (
        <div style={{padding: '2rem', backgroundColor: '#1E1E2F', color: '#FFF', minHeight: '100vh'}}>
            <h1 style={{textAlign: 'center'}}>인턴십 이수율 지표</h1>

            {/* Chart */}
            <CChartBar data={chartData} options={chartOptions} style={{marginBottom: '2rem'}}/>

            {/* Table */}
            <CTable bordered borderColor="dark" color="dark">
                <CTableHead>
                    <CTableRow>
                        <CTableHeaderCell scope="col">연도</CTableHeaderCell>
                        {years.map((year) => (
                            <CTableHeaderCell key={year} scope="col">{year}</CTableHeaderCell>
                        ))}
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    <CTableRow>
                        <CTableDataCell>총 User 수</CTableDataCell>
                        {userCounts.map((count, index) => (
                            <CTableDataCell key={index}>{count}</CTableDataCell>
                        ))}
                    </CTableRow>
                    <CTableRow>
                        <CTableDataCell>목표</CTableDataCell>
                        {targets.map((target, index) => (
                            <CTableDataCell key={index}>{target}</CTableDataCell>
                        ))}
                    </CTableRow>
                </CTableBody>
            </CTable>
        </div>
    );
};

export default ProfessorInternship;
