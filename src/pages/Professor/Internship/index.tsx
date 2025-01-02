import React, {useRef, useState} from "react";
import {CButton, CCard, CCardBody, CCardHeader, CContainer, CFormSelect} from "@coreui/react";
import {
    ArcElement,
    BarController,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineController,
    LineElement,
    PieController,
    PointElement,
    Tooltip
} from 'chart.js';
import {Bar, Chart, Pie} from "react-chartjs-2";
import {useChartStore} from "@store/internship";
import CIcon from "@coreui/icons-react";
import {cilArrowThickToBottom} from "@coreui/icons";

ChartJS.register(
    LinearScale, CategoryScale, BarElement, PointElement, LineElement, Legend, Tooltip,
    LineController, BarController, PieController, ArcElement
);

const downloadChart = (chartRef: React.RefObject<ChartJS<'bar' | 'line' | 'pie'>>, filename: string) => {
    if (chartRef.current) {
        const imageUrl = chartRef.current.toBase64Image();
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = filename;
        link.click();
    }
};

const ProfessorInternship = () => {
    const [departmentInternshipStatusYear, setDepartmentInternshipStatusYear] = useState('2024');
    const [internshipStatusByTypeYear, setInternshipStatusByTypeYear] = useState('2024');

    const mixChartRef = useRef<ChartJS<'bar' | 'line'> | null>(null);
    const barChartRef = useRef<ChartJS<'bar'> | null>(null);
    const pieChartRef = useRef<ChartJS<'pie'> | null>(null);

    const {internshipCompletion, departmentInternshipStatus, internshipStatusByType} = useChartStore();

    const chartStyle = {height: '100%', width: 'auto'};
    const cardBodyStyle = {display: 'flex', justifyContent: 'center', alignItems: 'center'};

    const handleDepartmentInternshipStatusYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setDepartmentInternshipStatusYear(event.target.value);
    };

    const handleInternshipStatusByTypeYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setInternshipStatusByTypeYear(event.target.value);
    };

    return (
        <CContainer fluid className="flex-grow-1 px-4 body">
            <CContainer className="d-flex justify-content-center my-5">
                <CCard className="bg-dawn-light text-white border-gray" style={{width: '100%', maxWidth: '1200px'}}>
                    <CCardHeader
                        className="d-flex justify-content-between align-items-center bg-dawn-light text-white px-4 py-3">
                        <span>인턴십 이수율 지표</span>
                        <CButton color="primary" className="bg-transparent border-0"
                                 onClick={() => downloadChart(mixChartRef, 'internship-completion.png')}>
                            <CIcon icon={cilArrowThickToBottom} size="lg"/>
                        </CButton>
                    </CCardHeader>
                    <CCardBody className="pt-0" style={{...cardBodyStyle, height: '33rem'}}>
                        <Chart type="bar" data={internshipCompletion} ref={mixChartRef} style={chartStyle}/>
                    </CCardBody>
                </CCard>
            </CContainer>

            <CContainer className="d-flex justify-content-center my-5">
                <CCard className="bg-dark text-white border-gray" style={{width: '100%', maxWidth: '1200px'}}>
                    <CCardHeader className="d-flex justify-content-between align-items-center px-4 py-3">
                        <CContainer className="d-flex align-items-center">
                            <CFormSelect
                                className="bg-dawn-light text-white border-gray"
                                value={departmentInternshipStatusYear}
                                onChange={handleDepartmentInternshipStatusYearChange}
                                style={{marginRight: '10px', width: '150px'}}
                            >
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                            </CFormSelect>
                            <span>학과별 인턴 현황</span>
                        </CContainer>
                        <CButton color="primary" className="bg-transparent border-0"
                                 onClick={() => downloadChart(barChartRef, 'department-internship-status.png')}>
                            <CIcon icon={cilArrowThickToBottom} size="lg"/>
                        </CButton>
                    </CCardHeader>
                    <CCardBody style={{...cardBodyStyle, height: '500px', overflow: 'hidden'}}>
                        <Bar data={departmentInternshipStatus[departmentInternshipStatusYear]} ref={barChartRef}
                             style={chartStyle}/>
                    </CCardBody>
                </CCard>
            </CContainer>

            <CContainer className="d-flex justify-content-center my-5">
                <CCard className="bg-dark text-white border-gray" style={{width: '100%', maxWidth: '1200px'}}>
                    <CCardHeader className="d-flex justify-content-between align-items-center px-4 py-3">
                        <CContainer className="d-flex align-items-center">
                            <CFormSelect
                                className="bg-dawn-light text-white border-gray"
                                value={internshipStatusByTypeYear}
                                onChange={handleInternshipStatusByTypeYearChange}
                                style={{marginRight: '10px', width: '150px'}}
                            >
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                            </CFormSelect>
                            <span>인턴 유형별 현황</span>
                        </CContainer>
                        <CButton color="primary" className="bg-transparent border-0"
                                 onClick={() => downloadChart(pieChartRef, 'internship-status-by-type.png')}>
                            <CIcon icon={cilArrowThickToBottom} size="lg"/>
                        </CButton>
                    </CCardHeader>
                    <CCardBody className="pt-0 d-flex justify-content-center align-items-center"
                               style={{height: '500px'}}>
                        <Pie data={internshipStatusByType[internshipStatusByTypeYear]} ref={pieChartRef}
                             style={{height: '400px', width: 'auto'}}/>
                    </CCardBody>
                </CCard>
            </CContainer>
        </CContainer>
    );
};

export default ProfessorInternship;
