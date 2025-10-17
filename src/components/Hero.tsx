import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    const [formData, setFormData] = useState({
        acomodacao: 'Quarto Solteiro',
        checkIn: '',
        checkOut: '',
        adultos: '1',
        criancas: '0'
    });

    const today = new Date().toISOString().split('T')[0];

    useEffect(() => {
        const checkInDefault = today;

        const checkOutDefault = new Date();
        checkOutDefault.setDate(checkOutDefault.getDate() + 1);
        const checkOutDefaultStr = checkOutDefault.toISOString().split('T')[0];

        setFormData(prev => ({
            ...prev,
            checkIn: checkInDefault,
            checkOut: checkOutDefaultStr
        }));
    }, []);

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));

        if (field === 'checkIn' && value) {
            const checkInDate = new Date(value);
            const currentCheckOut = new Date(formData.checkOut);

            if (currentCheckOut <= checkInDate) {
                const newCheckOut = new Date(checkInDate);
                newCheckOut.setDate(newCheckOut.getDate() + 1);
                setFormData(prev => ({
                    ...prev,
                    checkOut: newCheckOut.toISOString().split('T')[0]
                }));
            }
        }
    };

    const formatDate = (dateString: string) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.checkIn || !formData.checkOut) {
            alert('Por favor, selecione as datas de check-in e check-out.');
            return;
        }

        const checkInDate = new Date(formData.checkIn);
        const checkOutDate = new Date(formData.checkOut);

        if (checkOutDate <= checkInDate) {
            alert('A data de check-out deve ser pelo menos 1 dia após o check-in.');
            return;
        }

        const adultos = parseInt(formData.adultos);
        const criancas = parseInt(formData.criancas);
        const totalHospedes = adultos + criancas;

        const mensagem = `Olá! Gostaria de fazer uma reserva no Hotel Canto da Praia.

📋 *Detalhes da Reserva:*
🏨 Acomodação: ${formData.acomodacao}
📅 Check-in: ${formatDate(formData.checkIn)}
📅 Check-out: ${formatDate(formData.checkOut)}
👥 Adultos: ${adultos} ${adultos === 1 ? 'pessoa' : 'pessoas'}
👶 Crianças (até 5 anos): ${criancas} ${criancas === 1 ? 'criança' : 'crianças'}
📊 Total de hóspedes: ${totalHospedes}

Aguardo confirmação da disponibilidade. Obrigado!`;

        const mensagemEncoded = encodeURIComponent(mensagem);

        const whatsappUrl = `https://wa.me/559884151367?text=${mensagemEncoded}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="hero" className="hero">
            <div className="container hero-inner">
                <motion.header
                    className="hero-top"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        O melhor custo-benefício perto da praia
                    </motion.h1>
                    <motion.p
                        className="hero-sub"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Conforto, hospitalidade e lazer a poucos passos da Avenida Litorânea.
                    </motion.p>
                </motion.header>

                <motion.form
                    className="search-bar hover-lift"
                    id="booking"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <div className="search-row">
                        <motion.div
                            className="field"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                        >
                            <label>Acomodação</label>
                            <select
                                value={formData.acomodacao}
                                onChange={(e) => handleInputChange('acomodacao', e.target.value)}
                            >
                                <option>Quarto Triplo</option>
                                <option>Quarto Casal</option>
                                <option>Quarto Solteiro</option>
                            </select>
                        </motion.div>
                        <motion.div
                            className="field"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.1 }}
                        >
                            <label>Adultos</label>
                            <select
                                value={formData.adultos}
                                onChange={(e) => handleInputChange('adultos', e.target.value)}
                            >
                                <option value="1">1 Adulto</option>
                                <option value="2">2 Adultos</option>
                                <option value="3">3 Adultos</option>
                                <option value="4">4 Adultos</option>
                                <option value="5">5 Adultos</option>
                                <option value="6">6 Adultos</option>
                            </select>
                        </motion.div>
                        <motion.div
                            className="field"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.15 }}
                        >
                            <label>Crianças (até 5 anos)</label>
                            <select
                                value={formData.criancas}
                                onChange={(e) => handleInputChange('criancas', e.target.value)}
                            >
                                <option value="0">0 Crianças</option>
                                <option value="1">1 Criança</option>
                                <option value="2">2 Crianças</option>
                                <option value="3">3 Crianças</option>
                                <option value="4">4 Crianças</option>
                            </select>
                            <motion.p
                                className="hero-notice"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 1.5 }}
                            >
                                ℹ️ Crianças até 5 anos não pagam
                            </motion.p>
                        </motion.div>
                        <motion.div
                            className="field"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                        >
                            <label>Check In</label>
                            <input
                                type="date"
                                min={today}
                                value={formData.checkIn}
                                onChange={(e) => handleInputChange('checkIn', e.target.value)}
                                required
                            />
                        </motion.div>
                        <motion.div
                            className="field"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.3 }}
                        >
                            <label>Check Out</label>
                            <input
                                type="date"
                                min={formData.checkIn || today}
                                value={formData.checkOut}
                                onChange={(e) => handleInputChange('checkOut', e.target.value)}
                                required
                            />
                        </motion.div>
                        <motion.button
                            className="btn btn-search btn-animated"
                            type="submit"
                            aria-label="Reservar agora"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 1.4 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.35-4.35"></path>
                            </svg>
                        </motion.button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
};

export default Hero;