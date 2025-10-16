import Link from 'next/link';
import React from 'react';

const Terms: React.FC = () => {
  return (
    <main className="container" style={{ padding: '80px 20px' }}>
      <h1>Termos e Condições</h1>

      <p>
        Estes Termos e Condições regem o uso do site do Hotel Canto da Praia e as reservas efetuadas por meio dele.
        Ao utilizar o site e enviar uma reserva você concorda com estes termos.
      </p>

      <h2>1. Reservas e Pagamentos</h2>
      <p>
        As reservas estão sujeitas à disponibilidade. Podemos solicitar dados de pagamento para confirmar a reserva.
        Cancelamentos e políticas de reembolso serão comunicados no momento da reserva e podem variar conforme a tarifa.
      </p>

      <h2>2. Check-in / Check-out</h2>
      <p>
        Horários padrão de check-in e check-out serão informados na confirmação da reserva. Pedidos especiais estarão sujeitos
        à disponibilidade e podem acarretar custos adicionais.
      </p>

      <h2>3. Responsabilidades</h2>
      <p>
        O hotel não se responsabiliza por pertences pessoais deixados nas dependências após o check-out. É responsabilidade do hóspede
        zelar por seus pertences e seguir as regras internas do hotel.
      </p>

      <h2>4. Alterações e Cancelamentos</h2>
      <p>
        Podemos alterar ou recusar reservas em caso de erro, fraude ou indisponibilidade inesperada. Em caso de cancelamento por nossa parte,
        ofereceremos alternativas ou reembolso conforme aplicável.
      </p>

      <h2>5. Lei aplicável</h2>
      <p>
        Estes termos são regidos pelas leis brasileiras. Quaisquer disputas serão solucionadas pelos tribunais competentes do foro local,
        salvo disposição em contrário exigida por lei.
      </p>

      <h2>6. Contato</h2>
      <p>
        Para questões sobre estes termos entre em contato conosco através dos canais informados no site.
      </p>

      <p>
        <Link href="/">Voltar ao início</Link>
      </p>
    </main>
  );
};

export default Terms;
