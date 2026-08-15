import { DriveFileItem } from '../types';

export const driveStructure: DriveFileItem[] = [
  {
    id: 'f1',
    name: '01. DDS - Diálogos Diários de Segurança Prontos',
    type: 'folder',
    itemsCount: 340,
    size: '480 MB',
    description: 'Apresentações e apostilas em Word/PDF com DDS prontos para aplicar em campo todos os dias.',
    subItems: [
      { id: 'f1-1', name: 'DDS_Uso_Correto_de_EPIs_e_Conservacao.pptx', type: 'ppt', size: '14.2 MB' },
      { id: 'f1-2', name: 'DDS_Trabalho_em_Altura_NR35_Cuidados.pptx', type: 'ppt', size: '18.5 MB' },
      { id: 'f1-3', name: 'DDS_Seguranca_em_Eletricidade_NR10.pptx', type: 'ppt', size: '12.1 MB' },
      { id: 'f1-4', name: 'DDS_Saude_Mental_e_Stress_no_Trabalho.docx', type: 'doc', size: '1.4 MB' },
      { id: 'f1-5', name: 'DDS_Ergonomia_e_Postura_no_Escritorio_e_Obra.pptx', type: 'ppt', size: '15.8 MB' },
      { id: 'f1-6', name: 'Coletanea_DDS_Temas_Completos.pdf', type: 'pdf', size: '42.0 MB' }
    ]
  },
  {
    id: 'f2',
    name: '02. Modelos Editáveis (PGR, PCMSO, LTCAT, OS e APR)',
    type: 'folder',
    itemsCount: 125,
    size: '620 MB',
    description: 'Documentos técnicos 100% editáveis no Word e Excel, prontos para preencher e imprimir.',
    subItems: [
      { id: 'f2-1', name: 'Modelo_PGR_Programa_Gerenciamento_Riscos_NR01.docx', type: 'doc', size: '8.4 MB' },
      { id: 'f2-2', name: 'Modelo_APR_Analise_Preliminar_de_Risco_Padrao.xlsx', type: 'xls', size: '3.2 MB' },
      { id: 'f2-3', name: 'Ordem_de_Servico_SST_Modelos_Diversos_CBOs.docx', type: 'doc', size: '12.6 MB' },
      { id: 'f2-4', name: 'Modelo_LTCAT_Laudo_Tecnico_Condicoes_Ambientais.docx', type: 'doc', size: '6.1 MB' },
      { id: 'f2-5', name: 'Ficha_de_EPI_Editavel_com_Termo_de_Responsabilidade.docx', type: 'doc', size: '2.1 MB' }
    ]
  },
  {
    id: 'f3',
    name: '03. Treinamentos Completos das NRs em PowerPoint (NR-01 a NR-38)',
    type: 'folder',
    itemsCount: 42,
    size: '850 MB',
    description: 'Apresentações em slides de alto impacto visual com animações e ilustrações técnicas.',
    subItems: [
      { id: 'f3-1', name: 'Treinamento_NR35_Trabalho_em_Altura_Completo_16h.pptx', type: 'ppt', size: '45.2 MB' },
      { id: 'f3-2', name: 'Treinamento_NR10_Basico_Seguranca_Eletricidade.pptx', type: 'ppt', size: '52.0 MB' },
      { id: 'f3-3', name: 'Treinamento_CIPA_NR05_Formacao_Completa.pptx', type: 'ppt', size: '38.6 MB' },
      { id: 'f3-4', name: 'Treinamento_NR33_Espaco_Confinado_Vigias_e_Trabalhadores.pptx', type: 'ppt', size: '48.1 MB' },
      { id: 'f3-5', name: 'Treinamento_NR18_Seguranca_na_Construcao_Civil.pptx', type: 'ppt', size: '61.4 MB' }
    ]
  },
  {
    id: 'f4',
    name: '04. Checklists, Formulários e Planilhas de Gestão SST',
    type: 'folder',
    itemsCount: 88,
    size: '210 MB',
    description: 'Planilhas em Excel automatizadas para gestão de extintores, EPIs, exames e inspeções.',
    subItems: [
      { id: 'f4-1', name: 'Planilha_Automatizada_Controle_de_EPIs_Estoque.xlsx', type: 'xls', size: '5.5 MB' },
      { id: 'f4-2', name: 'Checklist_Inspecao_Extintores_e_Hidrantes.xlsx', type: 'xls', size: '2.8 MB' },
      { id: 'f4-3', name: 'Planilha_Investigacao_e_Registro_de_Acidentes.xlsx', type: 'xls', size: '4.1 MB' },
      { id: 'f4-4', name: 'Checklist_Inspecao_de_Andaimes_e_Escadas.pdf', type: 'pdf', size: '1.9 MB' }
    ]
  },
  {
    id: 'f5',
    name: '05. Vídeos para seus Treinamentos e Dinâmicas de Grupo',
    type: 'folder',
    itemsCount: 35,
    size: '390 MB',
    description: 'Vídeos curtos de impacto para abertura de treinamentos, SIPAT e dinâmicas motivacionais.',
    subItems: [
      { id: 'f5-1', name: 'Video_Treinamento_Uso_Obrigatorio_de_EPI.mp4', type: 'video', size: '85.0 MB' },
      { id: 'f5-2', name: 'Video_Treinamento_Prevencao_de_Quedas_NR35.mp4', type: 'video', size: '110.0 MB' },
      { id: 'f5-3', name: 'Dinamica_Pratica_SIPAT_Trabalho_em_Equipe.mp4', type: 'video', size: '72.4 MB' }
    ]
  },
  {
    id: 'f6',
    name: '06. Materiais de Estudo e Preparatório para Concursos SST',
    type: 'folder',
    itemsCount: 65,
    size: '180 MB',
    description: 'Apostilas, resumos esquematizados de NRs e baterias de questões comentadas.',
    subItems: [
      { id: 'f6-1', name: 'Resumo_Esquematizado_Todas_as_NRs_Atualizadas_2026.pdf', type: 'pdf', size: '28.5 MB' },
      { id: 'f6-2', name: 'Caderno_500_Questoes_Comentadas_Concursos_SST.pdf', type: 'pdf', size: '19.2 MB' },
      { id: 'f6-3', name: 'Apostila_Higene_Ocupacional_LTCAT_e_Laudos.pdf', type: 'pdf', size: '34.0 MB' }
    ]
  }
];

export const whatYouGetList = [
  "Documentos de Segurança do Trabalho",
  "Modelos diversos 100% editáveis",
  "Apresentações em PowerPoint (PPT)",
  "DDS (Diálogos Diários de Segurança)",
  "Checklists de inspeção diária e mensal",
  "Procedimentos Operacionais Padrão (POP)",
  "Formulários e Fichas de EPI",
  "Material atualizado para estudos e concursos",
  "Vídeos para seus treinamentos",
  "Conteúdo complementar para SIPAT",
  "Arquivos perfeitamente organizados em pastas",
  "Material utilizado diariamente por profissionais referência"
];
