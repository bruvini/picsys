import React from 'react';
import './LoginCadastro.css';
import CustomInput from '../componentes/inputs/CustomInput';
import CustomButton from '../componentes/botoes/CustomButton';
import CustomSelect from '../componentes/ListaSuspensa/CustomSelect';
import logo from '../assets/so_logo.png';

function LoginCadastro() {
    return (
        <div className="login-cadastro-container">
            <div className="login-cadastro-card">
                <div className="top-section">
                    <div className="logo-container">
                        <img className="logo" src={logo} alt="Logo do Sistema PICSys que mostra a letra P em estilo arábico românico com flores na sua base" />
                    </div>
                    <h1 className="welcome-message">Bem-vindo(a) ao PICSys: Potencializando a saúde através da natureza e tecnologia</h1>
                </div>
                <div className="bottom-section">
                    <div className="form login-form">
                        <h2>Acessar o PICSys</h2>
                        <CustomInput type="email" placeholder="Email" />
                        <CustomInput type="password" placeholder="Senha" />
                        <CustomButton>Entrar no sistema</CustomButton>
                        <p className="forgot-password">Esqueceu a senha?</p>
                    </div>

                    <div className="divisoria"></div>

                    <div className="form cadastro-form">
                        <h2>Ainda não tenho cadastro</h2>
                        <CustomInput type="text" placeholder="Nome Completo" />
                        <CustomInput type="email" placeholder="Email" />
                        <CustomSelect
                            options={[
                                { value: 'enfermeiro', label: 'Enfermeiro(a)' },
                                { value: 'medico', label: 'Médico(a)' },
                                { value: 'fisioterapeuta', label: 'Fisioterapeuta' },
                                { value: 'profissional-de-educacao-fisica', label: 'Profissional de Educação Física' },
                                { value: 'psicologo', label: 'Psicólogo(a)' },
                                { value: 'nutricionista', label: 'Nutricionista' },
                                { value: 'terapeuta-ocupacional', label: 'Terapeuta Ocupacional' },
                                { value: 'outros', label: 'Outros' }
                            ]}
                        />
                        <CustomInput type="password" placeholder="Criar Senha" />
                        <CustomButton>Concluir meu cadastro</CustomButton>
                    </div>
                </div>

                <div className="rodape">
                    <p>
                        O PICSys é um sistema dedicado a potencializar a saúde por meio da natureza e tecnologia, promovendo o bem-estar e a qualidade de vida através das Práticas Integrativas e Complementares no SUS.
                    </p>
                    <p>
                    Desenvolvido por <a href="https://bvsdevelopments.com/" target="_blank" rel="noopener noreferrer"> <strong>Enfermeiro Bruno Vinícius da Silva</strong></a>, programador e especialista em saúde da família pela Secretaria Municipal de Saúde de Florianópolis.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LoginCadastro;
