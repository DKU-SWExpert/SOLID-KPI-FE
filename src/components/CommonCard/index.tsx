import React, { ReactNode } from 'react';
import { CCard, CCardHeader, CCardBody } from '@coreui/react';

interface CommonCardProps {
    header: string;
    children?: ReactNode;
    textBgColor: string;
    style?: React.CSSProperties;
}

const CommonCard: React.FC<CommonCardProps> = ({ header, children, textBgColor, style }) => {
    return (
        <CCard textBgColor={textBgColor} className="mt-4 mb-4 ms-2 me-2" style={style}>
            <CCardHeader className="text-white">{header}</CCardHeader>
            {children && <CCardBody className="bg-dawn">{children}</CCardBody>}
        </CCard>
    );
};

export default CommonCard;
