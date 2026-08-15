import React, { useState } from 'react';
import { 
  Folder, 
  FileText, 
  FileSpreadsheet, 
  Presentation, 
  Video, 
  FileCode, 
  ChevronRight, 
  Search, 
  ShieldCheck, 
  HardHat, 
  ArrowRight,
  Download,
  Eye,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { driveStructure } from '../data/driveContents';
import { DriveFileItem } from '../types';

interface DriveExplorerProps {
  onCtaClick: () => void;
}

export const DriveExplorerSection: React.FC<DriveExplorerProps> = ({ onCtaClick }) => {
  const [selectedFolder, setSelectedFolder] = useState<DriveFileItem>(driveStructure[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'ppt':
        return <Presentation className="w-4 h-4 text-orange-500 shrink-0" />;
      case 'xls':
        return <FileSpreadsheet className="w-4 h-4 text-emerald-600 shrink-0" />;
      case 'doc':
        return <FileText className="w-4 h-4 text-blue-600 shrink-0" />;
      case 'video':
        return <Video className="w-4 h-4 text-rose-500 shrink-0" />;
      case 'pdf':
      default:
        return <FileCode className="w-4 h-4 text-red-500 shrink-0" />;
    }
  };

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'ppt': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'xls': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'doc': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'video': return 'bg-rose-100 text-rose-800 border-rose-200';
      default: return 'bg-red-100 text-red-800 border-red-200';
    }
  };

  // Filter items across all folders if search query exists
  const allSubItems: { item: DriveFileItem; folderName: string }[] = driveStructure.flatMap(folder =>
    (folder.subItems || []).map(item => ({ item, folderName: folder.name }))
  );

  const filteredItems = searchQuery.trim()
    ? allSubItems.filter(entry => 
        entry.item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.folderName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : (selectedFolder.subItems || []).map(item => ({ item, folderName: selectedFolder.name }));

  return (
    <section id="preview-drive" className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* Glow Accents */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-950 text-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider border border-emerald-700/60 shadow-md">
            <Eye className="w-4 h-4 text-emerald-400" />
            <span>Transparência Total • Veja o que tem dentro</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Navegue pelas Pastas do{' '}
            <span className="text-emerald-400 underline decoration-amber-400 decoration-wavy decoration-2">
              Google Drive
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Mais de 2.500 MB de arquivos profissionais organizados em pastas para você encontrar o que precisa em segundos.
          </p>
        </div>

        {/* Interactive Drive Window Mockup */}
        <div className="bg-slate-900/90 rounded-3xl border-2 border-emerald-500/30 shadow-2xl overflow-hidden max-w-5xl mx-auto backdrop-blur-xl">
          
          {/* Drive Window Header Bar */}
          <div className="bg-slate-950 px-4 sm:px-6 py-3.5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <span className="text-xs text-slate-400 font-mono ml-2 hidden sm:inline">
                Google Drive • Meu Drive &gt; Acervo SST 2026 (2.5 GB)
              </span>
            </div>

            {/* Search within Drive */}
            <div className="relative flex-1 max-w-xs sm:max-w-sm">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar arquivo (ex: NR-35, DDS, APR)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>
          </div>

          {/* Drive Explorer Body */}
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[420px]">
            
            {/* Folders Sidebar */}
            <div className="md:col-span-5 bg-slate-950/60 border-b md:border-b-0 md:border-r border-slate-800 p-4 space-y-1.5 max-h-[300px] md:max-h-[480px] overflow-y-auto">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1 flex items-center justify-between">
                <span>Pastas Principais</span>
                <span className="text-emerald-400">6 Categorias</span>
              </div>

              {driveStructure.map((folder) => {
                const isSelected = selectedFolder.id === folder.id && !searchQuery.trim();
                return (
                  <button
                    key={folder.id}
                    onClick={() => {
                      setSelectedFolder(folder);
                      setSearchQuery('');
                    }}
                    className={`w-full text-left p-3 rounded-2xl transition-all duration-200 flex items-center justify-between gap-2.5 cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-700/30'
                        : 'hover:bg-slate-800/80 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Folder className={`w-5 h-5 shrink-0 ${isSelected ? 'text-amber-300' : 'text-emerald-400'}`} />
                      <div className="truncate text-xs sm:text-sm">
                        <p className="truncate">{folder.name.replace(/^[0-9]+\.\s*/, '')}</p>
                        <span className={`text-[10px] ${isSelected ? 'text-emerald-100' : 'text-slate-400'}`}>
                          {folder.size} • {folder.itemsCount} arquivos
                        </span>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'rotate-90 text-amber-300' : 'text-slate-500'}`} />
                  </button>
                );
              })}
            </div>

            {/* Files List Display Area */}
            <div className="md:col-span-7 p-4 sm:p-6 flex flex-col justify-between space-y-4 max-h-[480px] overflow-y-auto">
              
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>
                      {searchQuery.trim()
                        ? `Resultados para "${searchQuery}" (${filteredItems.length} arquivos)`
                        : selectedFolder.name}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">
                    100% Editáveis
                  </span>
                </div>

                {!searchQuery.trim() && selectedFolder.description && (
                  <p className="text-xs text-slate-300 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80">
                    💡 {selectedFolder.description}
                  </p>
                )}

                {/* File list items */}
                <div className="space-y-2">
                  {filteredItems.length === 0 ? (
                    <div className="py-8 text-center text-slate-400 text-xs">
                      Nenhum arquivo encontrado para "{searchQuery}". Tente pesquisar por NR, DDS ou EPI.
                    </div>
                  ) : (
                    filteredItems.map(({ item, folderName }) => (
                      <div
                        key={item.id}
                        className="bg-slate-950/70 hover:bg-slate-800/80 p-2.5 rounded-xl border border-slate-800 flex items-center justify-between gap-3 transition-colors group"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          {getFileIcon(item.type)}
                          <div className="min-w-0">
                            <p className="text-xs font-semibold text-slate-200 group-hover:text-white truncate">
                              {item.name}
                            </p>
                            {searchQuery.trim() && (
                              <p className="text-[10px] text-slate-400 truncate">
                                Pasta: {folderName}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase border ${getBadgeColor(item.type)}`}>
                            {item.type}
                          </span>
                          <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
                            {item.size}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Action Banner at bottom of Drive View */}
              <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 bg-gradient-to-r from-emerald-950/60 to-slate-950 p-3 rounded-2xl border border-emerald-800/40">
                <div className="text-left">
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Download Direto e Acesso Vitalício</span>
                  </div>
                  <div className="text-[11px] text-emerald-300">
                    Acesso imediato a todos os 2,5 GB por R$ 35,00
                  </div>
                </div>

                <button
                  onClick={onCtaClick}
                  className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-md transition-transform active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>BAIXAR AGORA</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
