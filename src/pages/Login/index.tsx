import React, {ChangeEvent, FormEvent} from "react"
import {
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CRow,
} from "@coreui/react"
import CIcon from "@coreui/icons-react"
import {cilLockLocked, cilUser} from "@coreui/icons"
import {useNavigate} from "react-router-dom";
import "@styles/custom-color.css";

const Login: React.FC = () => {
    const navigate = useNavigate();

    const [username, setUsername] = React.useState<string>("")
    const [password, setPassword] = React.useState<string>("")

    const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (!username || !password) {
            alert("Username 과 Password 를 입력해 주세요");
            return;
        }
        navigate("/");
    }

    return (
        <div className="bg-dawn-light min-vh-100 d-flex flex-row align-items-center">
            <CContainer className="border-1 border-gray">
                <CRow className="justify-content-center">
                    <CCol md={4}>
                        <CCardGroup>
                            <CCard className="rounded-4 p-4 bg-dawn" color="dark-gradient">
                                <CCardBody>
                                    <CForm onSubmit={handleSubmit}>
                                        <h1 className="mb-3 text-white">Login</h1>
                                        <CInputGroup className="mb-3">
                                            <CInputGroupText className="bg-dawn-light text-white border-gray">
                                                <CIcon icon={cilUser}/>
                                            </CInputGroupText>
                                            <CFormInput
                                                placeholder="Username"
                                                autoComplete="username"
                                                value={username}
                                                onChange={handleUsername}
                                                className="bg-dawn text-white border-gray gray-placeholder"
                                            />
                                        </CInputGroup>
                                        <CInputGroup className="mb-4">
                                            <CInputGroupText className="bg-dawn-light text-white border-gray">
                                                <CIcon icon={cilLockLocked}/>
                                            </CInputGroupText>
                                            <CFormInput
                                                type="password"
                                                placeholder="Password"
                                                autoComplete="current-password"
                                                value={password}
                                                onChange={handlePassword}
                                                className="bg-dawn text-white border-gray gray-placeholder"
                                            />
                                        </CInputGroup>
                                        <CRow>
                                            <CCol xs={12}>
                                                <CButton color="primary" className="btn btn-primary w-100"
                                                         type="submit">
                                                    Login
                                                </CButton>
                                            </CCol>
                                        </CRow>
                                    </CForm>
                                </CCardBody>
                            </CCard>
                        </CCardGroup>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    )
}

export default Login;
