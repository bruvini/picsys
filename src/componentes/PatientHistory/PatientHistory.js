import React from 'react';
import './PatientHistory.css';
import prosseguirIcon from '../../assets/prosseguir_icon.png'; // Importe o caminho correto para o seu ícone

const PatientHistory = ({ history, onChange, onClick }) => {
    return (
        <div className="patient-history">
            <textarea placeholder="Histórico clínico..." value={history} onChange={onChange}></textarea>
            <button onClick={onClick}><img src={prosseguirIcon} alt="Ícone de prosseguir" className="prosseguirIcon" /></button>
        </div>
    );
};

export default PatientHistory;