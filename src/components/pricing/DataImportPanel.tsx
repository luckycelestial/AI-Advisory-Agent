"use client";

import { useState } from "react";
import { LuUpload, LuFileSpreadsheet, LuFileText, LuX, LuLoader, LuCheck } from "react-icons/lu";

interface DataImportPanelProps {
  onDataImported: (data: any) => void;
}

export default function DataImportPanel({ onDataImported }: DataImportPanelProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [importStatus, setImportStatus] = useState<"idle" | "parsing" | "preview" | "success">("idle");
  const [fileName, setFileName] = useState("");
  const [fileType, setFileType] = useState<"excel" | "pdf" | null>(null);

  const simulateUpload = (type: "excel" | "pdf", name: string) => {
    setFileName(name);
    setFileType(type);
    setImportStatus("parsing");
    
    // Simulate OCR / direct parse lag
    setTimeout(() => {
      setImportStatus("preview");
    }, 2000);
  };

  const confirmImport = () => {
    setImportStatus("success");
    setTimeout(() => {
      onDataImported({
        materials: [
          { name: "Aluminium Alloy (6061)", currentCost: 380, marketCost: 427.12, supplier: "Bommasandra Metal Casting" },
          { name: "Steel Rods (Mild)", currentCost: 58000, marketCost: 61480, supplier: "Peenya Steel Distributor" }
        ],
        orders: [
          { id: "ORD-221", client: "Client X", margin: "14.2%" },
          { id: "ORD-214", client: "Client Y", margin: "9.5%" }
        ]
      });
      setIsOpen(false); // collapse panel after import succeeds
    }, 1000);
  };

  return (
    <div className="app-card border border-border-subtle bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
            <LuFileSpreadsheet size={18} />
          </div>
          <div>
            <h3 className="font-display font-bold text-slate-800 text-sm sm:text-base">
              Import Existing Business Data
            </h3>
            <p className="text-xs font-semibold text-slate-400">
              Excel (.xlsx/.csv) or PDF invoices, supplier quotes, past price lists
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-xs font-bold text-primary hover:text-primary-dark cursor-pointer uppercase tracking-wider"
        >
          {isOpen ? "Hide Panel" : "Expand"}
        </button>
      </div>

      {isOpen && (
        <div className="mt-6 pt-6 border-t border-slate-100 transition-all duration-300">
          {importStatus === "idle" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Drag and drop trigger zone */}
              <div 
                onClick={() => simulateUpload("pdf", "bommasandra_metal_quote_july26.pdf")}
                className="border-2 border-dashed border-slate-200 hover:border-primary/50 bg-slate-50 hover:bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 group"
              >
                <LuUpload size={32} className="text-slate-400 group-hover:text-primary transition-colors mb-3" />
                <span className="text-xs font-bold text-slate-800 mb-1">Upload PDF Supplier Invoice</span>
                <span className="text-[10px] text-slate-400">OCR parses prices and item types</span>
              </div>

              <div 
                onClick={() => simulateUpload("excel", "pricing_model_2026_q2.xlsx")}
                className="border-2 border-dashed border-slate-200 hover:border-primary/50 bg-slate-50 hover:bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 group"
              >
                <LuFileSpreadsheet size={32} className="text-slate-400 group-hover:text-primary transition-colors mb-3" />
                <span className="text-xs font-bold text-slate-800 mb-1">Upload Excel past quotes</span>
                <span className="text-[10px] text-slate-400">Extract past customer markups</span>
              </div>
            </div>
          )}

          {importStatus === "parsing" && (
            <div className="flex flex-col items-center justify-center py-10 space-y-4">
              <LuLoader size={36} className="text-primary animate-spin" />
              <div className="text-center">
                <p className="text-sm font-bold text-slate-800">Parsing {fileName}...</p>
                <p className="text-xs text-slate-400">Gemma is executing OCR and mapping data fields to schema...</p>
              </div>
            </div>
          )}

          {importStatus === "preview" && (
            <div className="space-y-6">
              <div className="bg-amber-50/50 border border-amber-200/60 rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {fileType === "pdf" ? (
                    <LuFileText className="text-amber-600" size={24} />
                  ) : (
                    <LuFileSpreadsheet className="text-emerald-600" size={24} />
                  )}
                  <div>
                    <h4 className="text-xs font-black uppercase text-amber-800 tracking-wider">Review Parsed Data Fields</h4>
                    <p className="text-[10px] text-slate-500 font-semibold">{fileName} loaded successfully.</p>
                  </div>
                </div>
                <button
                  onClick={() => setImportStatus("idle")}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <LuX size={16} />
                </button>
              </div>

              {/* Data Table Preview */}
              <div className="overflow-x-auto border border-slate-100 rounded-2xl">
                <table className="min-w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-100 text-[10px] font-black uppercase tracking-wider text-slate-400">
                      <th className="p-4">Material / Item</th>
                      <th className="p-4">Unit Cost</th>
                      <th className="p-4">Quoted / Current Sell</th>
                      <th className="p-4">Supplier</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600 font-semibold">
                    {fileType === "pdf" ? (
                      <>
                        <tr>
                          <td className="p-4 font-bold text-slate-800">Aluminium Alloy (6061)</td>
                          <td className="p-4">₹380 / kg</td>
                          <td className="p-4">₹412 / kg</td>
                          <td className="p-4">Bommasandra Metal Casting</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-slate-800">CNC Machining Fee</td>
                          <td className="p-4">₹1,800 / hr</td>
                          <td className="p-4">₹2,400 / hr</td>
                          <td className="p-4">Internal Cost Rate</td>
                        </tr>
                      </>
                    ) : (
                      <>
                        <tr>
                          <td className="p-4 font-bold text-slate-800">Steel Rods (Mild)</td>
                          <td className="p-4">₹58,000 / ton</td>
                          <td className="p-4">₹64,200 / ton</td>
                          <td className="p-4">Peenya Steel Distributor</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-slate-800">Tooling bits</td>
                          <td className="p-4">₹340 / pc</td>
                          <td className="p-4">₹400 / pc</td>
                          <td className="p-4">Jigani Tooling Labs</td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Confirm CTAs */}
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setImportStatus("idle")}
                  className="btn-secondary py-2 px-6 text-xs cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmImport}
                  className="btn-primary py-2 px-6 text-xs cursor-pointer"
                >
                  Confirm & Ground Model
                </button>
              </div>
            </div>
          )}

          {importStatus === "success" && (
            <div className="flex flex-col items-center justify-center py-8 space-y-3">
              <div className="h-10 w-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-sm">
                <LuCheck size={20} />
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-slate-800">Data Imported Successfully!</p>
                <p className="text-xs text-slate-400">Gemma context cache updated. Recommendations are now grounded.</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
