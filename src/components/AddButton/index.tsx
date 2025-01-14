import {CButton} from '@coreui/react';
import {useNavigate} from "react-router-dom";

const AddButton = () => {
    const navigate = useNavigate();
    const handleAdd = () => {
        navigate("./add");
    };

    return <CButton color="primary" onClick={handleAdd}>양식 추가</CButton>;
};

export default AddButton;
