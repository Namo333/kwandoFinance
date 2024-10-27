import React, { useState, useEffect } from 'react';
import Test from '../Test';

const CalcBlock = () => {
    const [loanAmount, setLoanAmount] = useState(20000);
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
        <div className="absolute left-0 w-full bg-gray-800 p-10">
            <div className="bg-white shadow-2xl rounded-2xl max-w-7xl px-4 py-10 sm:px-6 lg:px-8 mx-auto">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Калькулятор кредита</h2>
                
                <div className="space-y-4">
                    <div>
                        <span className="block mb-2 text-gray-600">Сумма кредита</span>
                        <input
                            type="number"
                            value={loanAmount}
                            onChange={(e) => setLoanAmount(e.target.value)}
                            placeholder="Введите сумму кредита"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:blue-600"
                        />
                    </div>

                    <div>
                        <span className="block mb-2 text-gray-600">Годовая процентная ставка (%)</span>
                        <input
                            type="number"
                            value={interestRate}
                            onChange={(e) => setInterestRate(e.target.value)}
                            placeholder="Введите процентную ставку"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:blue-600"
                        />
                    </div>

                    <div>
                        <span className="block mb-2 text-gray-600">Срок кредита (мес.)</span>
                        <input
                            type="number"
                            value={loanTerm}
                            onChange={(e) => setLoanTerm(e.target.value)}
                            placeholder="Введите срок кредита"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:blue-600"
                        />
                    </div>
                </div>

                {monthlyPayment && (
                    <div className="mt-6 text-gray-700 text-lg">
                        <div className="mb-2">Ежемесячный платеж: <strong className="text-blue-600">{monthlyPayment} ₽</strong></div>
                        <div className="mb-2">Сумма возврата: <strong className="text-blue-600">{totalPayment} ₽</strong></div>
                        <div className="mb-2">Переплата: <strong className="text-blue-600">{overpayment} ₽</strong></div>
                    </div>
                )}

                <div className="mt-8 flex justify-center">
                    <button
                        type="button"
                        className="py-3 px-10 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:blue-600 focus:ring-offset-2"
                        aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-scale-animation-modal" data-hs-overlay="#hs-scale-animation-modal"
                    >
                        Получить кредит
                    </button>
                    <Test/>
                </div>
            </div>
        </div>
    );
};

export default CalcBlock;