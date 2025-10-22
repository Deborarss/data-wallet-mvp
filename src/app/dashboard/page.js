'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ethers } from 'ethers';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useDropzone } from 'react-dropzone';

const COLORS = ['#10B981', '#3B82F6', '#F59E0B'];

export default function Dashboard() {
  const [wallet, setWallet] = useState(null);
  const [totalDividends, setTotalDividends] = useState(436);

  const assets = [
    { name: 'Fotos Rosto', value: 234, type: 'image', icon: '📸' },
    { name: 'Textos Blog', value: 156, type: 'text', icon: '📄' },
    { name: 'Áudio', value: 6, type: 'audio', icon: '🎤' },
  ];

  const data = [
    { name: 'Fotos', value: 51 },
    { name: 'Textos', value: 34 },
    { name: 'Áudio', value: 15 },
  ];

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_requestAccounts' }).then(accounts => {
        setWallet(accounts[0]);
      });
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (files) => {
      console.log('Upload:', files);
      alert('Dado tokenizado! Vá para Licenças para configurar.');
    },
    multiple: false,
  });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-blue-400">Data Wallet</h1>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-400">
            {wallet ? `Conectado: ${wallet.slice(0, 6)}...` : 'MetaMask desconectada'}
          </span>
          <div className={`w-3 h-3 rounded-full ${wallet ? 'bg-green-500' : 'bg-red-500'}`}></div>
        </div>
      </header>

      <p className="text-gray-400 mb-6 text-center">
        Seus dados, suas regras, seus dividendos
      </p>

      {/* Card Total Dividendos */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-800 rounded-xl shadow-lg p-6 mb-8 flex justify-between items-center"
      >
        <div>
          <h2 className="text-lg font-semibold text-gray-300 mb-1">Total em Dividendos</h2>
          <span className="text-4xl font-bold text-emerald-400">R$ {totalDividends}</span>
          <p className="text-emerald-500 mt-1 text-sm">↗️ +23% este mês</p>
        </div>
        <ResponsiveContainer width={100} height={100}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={30}
              outerRadius={40}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Seus Ativos */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4 text-gray-200">Seus Ativos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {assets.map((asset, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-800 hover:bg-gray-700 transition rounded-xl p-4 text-center shadow-md"
            >
              <div className="text-3xl mb-2">{asset.icon}</div>
              <h3 className="font-medium text-gray-200">{asset.name}</h3>
              <p className="text-emerald-400 font-bold">R$ {asset.value}</p>
              <p className="text-xs text-cyan-400 mt-1">Tokenizado • ID #{1233 + i}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Botões de ação */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <button className="flex-1 bg-blue-700 hover:bg-blue-600 transition text-white py-3 rounded-lg font-bold">
          + Adicionar
        </button>
        <button className="flex-1 bg-blue-600 hover:bg-blue-500 transition text-white py-3 rounded-lg font-semibold">
          Licenças
        </button>
        <button className="flex-1 bg-blue-600 hover:bg-blue-500 transition text-white py-3 rounded-lg font-semibold">
          Transações
        </button>
      </div>

      {/* Dropzone */}
      <motion.div
        {...getRootProps()}
        className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center cursor-pointer text-gray-400 hover:bg-gray-800 transition"
        whileHover={{ scale: 1.02 }}
      >
        <input {...getInputProps()} />
        <p>Arraste seus dados aqui ou clique para upload</p>
      </motion.div>

      {/* Footer */}
      <footer className="text-xs text-gray-500 mt-10 text-center">
        Sua identidade digital trabalhando por você — valorize seus dados.
      </footer>
    </div>
  );
}
