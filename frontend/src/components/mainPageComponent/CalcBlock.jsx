import React, { useState, useEffect } from 'react';

const CalcBlock = () => {
    const [loanAmount, setLoanAmount] = useState(200000);
    const [interestRate, setInterestRate] = useState(9);
    const [loanTerm, setLoanTerm] = useState(24);
    
    const [monthlyPayment, setMonthlyPayment] = useState(null);
    const [totalPayment, setTotalPayment] = useState(null);
    const [overpayment, setOverpayment] = useState(null);

    const calculateLoan = () => {
        const P = parseFloat(loanAmount);
        const r = parseFloat(interestRate) / 100 / 12;
        const n = parseInt(loanTerm, 10);

        if (isNaN(P) || isNaN(r) || isNaN(n) || P <= 0 || r <= 0 || n <= 0) {
            return;
        }

        const M = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
        
        const total = M * n;
        const overpay = total - P;
        
        setMonthlyPayment(M.toFixed(2));
        setTotalPayment(total.toFixed(2));
        setOverpayment(overpay.toFixed(2));
    };

    useEffect(() => {
        calculateLoan();
    }, [loanAmount, interestRate, loanTerm]);

    return (
        <div className="bg-gradient-to-r from-purple-600 to-blue-400 absolute left-0 w-full">
            <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 mx-auto">
                <h2 className="text-white/80 text-xl tracking-wider">Калькулятор кредита</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                    <div>
                        <div className="mb-4">
                            <label className="block mb-2 text-white">Сумма кредита</label>
                            <input
                                type="number"
                                value={loanAmount}
                                onChange={(e) => setLoanAmount(e.target.value)}
                                placeholder="Введите сумму кредита"
                                className="bg-white py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none placeholder-gray-600"
                            />
                        </div>
        
                        <div className="mb-4">
                            <label className="block mb-2 text-white">Годовая процентная ставка (%)</label>
                            <input
                                type="number"
                                value={interestRate}
                                onChange={(e) => setInterestRate(e.target.value)}
                                placeholder="Введите процентную ставку"
                                className="bg-white py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none placeholder-gray-600"
                            />
                        </div>
        
                        <div className="mb-4">
                            <label className="block mb-2 text-white">Срок кредита (мес.)</label>
                            <input
                                type="number"
                                value={loanTerm}
                                onChange={(e) => setLoanTerm(e.target.value)}
                                placeholder="Введите срок кредита"
                                className="bg-white py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none placeholder-gray-600"
                            />
                        </div>
        
                    </div>
        
                    <div className="lg:pl-6">
                        {monthlyPayment && (
                            <div className='text-xl text-white'>
                                <div className="mb-2">Ежемесячный платеж: <strong>{monthlyPayment} ₽</strong></div>
                                <div className="mb-2">Сумма возврата: <strong>{totalPayment} ₽</strong></div>
                                <div className="mb-2">Переплата: <strong>{overpayment} ₽</strong></div>
                            </div>
                        )}
                        <button type="button" class="py-3 px-20 inline-flex items-center gap-x-2 text-sm font-medium rounded-[10px] border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
                            Получить кредит
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalcBlock;
