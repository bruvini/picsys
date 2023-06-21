import React, { useState } from 'react';
import Header from '../../componentes/Header/Header';
import MainSection from '../../componentes/MainSection/MainSection';
import TitleDescription from '../../componentes/TitleDescription/TitleDescription';
import Table from '../../componentes/Table/Table';

import './PacientePage.css';
import Footer from '../../componentes/Footer/Footer';
import CustomForm from '../../componentes/Formulario/CustomForm';

const PacientePage = () => {
    const [patients, setPatients] = useState([]);
    const description = `
    <p>Página de Cadastro e gerenciamento de dados dos pacientes atendidos por você.</p>
    `;

    const formFields = [
        { type: 'text', placeholder: 'Nome Completo', name: 'nome' },
        { type: 'text', placeholder: 'Data de Nascimento', name: 'dataNascimento' },
        { type: 'tel', placeholder: 'Telefone', name: 'telefone' },
        { type: 'select', placeholder: 'Sexo', name: 'sexo', options: [
            { value: 'masculino', label: 'Masculino' },
            { value: 'feminino', label: 'Feminino' },
        ]},
        { type: 'checkbox', label: 'Diabetes', name: 'diabetes' },
        { type: 'checkbox', label: 'Hipertensão', name: 'hipertensao' },
        // ... Adicione mais opções de comorbidades conforme necessário
    ];

    const handleFormSubmit = (formData) => {
        // Aqui você implementaria a lógica para adicionar um novo paciente à sua lista
        console.log(formData);
    };

    return (
        <div className="auriculotherapy-page">
            <Header />
            <MainSection>
                <TitleDescription
                    title="Gerenciamento de Pacientes"
                    description={description}
                />
                <CustomForm formFields={formFields} onSubmit={handleFormSubmit} />
                <Table columns={["Nome", "Última Atualização", "Ações"]} data={patients} />
            </MainSection>
            <Footer />
        </div>
    );
};

export default PacientePage;