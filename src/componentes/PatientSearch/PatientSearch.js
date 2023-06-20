import React from 'react';
import './PatientSearch.css';
import lupa from '../../assets/lupa.svg'; // Aqui é onde você importa o ícone da lupa

const PatientSearch = ({ onSearch }) => {
    return (
        <div className="patient-search">
            <img className='lupaIcon' src={lupa} alt="Ícone de pesquisa" width="18px" height="18px" />
            <input type="text" placeholder="Digite o nome do paciente" onChange={onSearch} />
        </div>
    );
};

export default PatientSearch;
