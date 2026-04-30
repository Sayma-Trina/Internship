import React from "react";
import Navbar from "../components/layout/NavBar";
import { Footer } from "../components/layout/Footer";
import { SPACING, COLORS } from "../constants/colors";
import { Button } from "../components/common/Button";
import logoSrc from "../assets/images/track.png";

const sampleOrders = [
  { id: "TRI1021", customer: "SSS", status: "Pending", amount: 120 },
  { id: "TRI1022", customer: "KKK", status: "Delivered", amount: 50 },
  { id: "TRI1023", customer: "SSS", status: "In Transit", amount: 200 },
];

function downloadCSV(rows, filename = "export.csv") {
  const header = Object.keys(rows[0]).join(",") + "\n";
  const body = rows.map((r) => Object.values(r).join(",")).join("\n");
  const csv = header + body;
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function exportPDF(rows, title = "Orders") {
  const tableRows = rows
    .map(
      (r) =>
        `<tr><td style="padding:10px;border-bottom:1px solid #f1f5f9">${r.id}</td><td style="padding:10px;border-bottom:1px solid #f1f5f9">${r.customer}</td><td style="padding:10px;border-bottom:1px solid #f1f5f9">${r.status}</td><td style="padding:10px;border-bottom:1px solid #f1f5f9">${r.amount}</td></tr>`
    )
    .join("");

  const html = `<!doctype html><html><head><meta charset="utf-8"><title>${title}</title><style>body{font-family:Inter,Arial,Helvetica,sans-serif;color:${COLORS.dark};padding:24px}h1{margin-bottom:8px}table{width:100%;border-collapse:collapse}th{background:#eef2ff;color:${COLORS.dark};text-align:left;padding:12px}</style></head><body><h1>${title}</h1><table><thead><tr><th>Order ID</th><th>Customer</th><th>Status</th><th>Amount</th></tr></thead><tbody>${tableRows}</tbody></table></body></html>`;

  const win = window.open("", "_blank");
  if (!win) {
    alert("Please allow popups to export PDF (browser blocked).\nAlternatively, use Download CSV.");
    return;
  }
  win.document.write(html);
  win.document.close();
  win.focus();
  setTimeout(() => {
    win.print();
  }, 250);
}

const AdminExport = () => {
  

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: COLORS.lightGray }}>
      <Navbar />
      <main style={{ flex: 1, padding: SPACING.xlarge, maxWidth: 1100, margin: "0 auto", width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: SPACING.large }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img src={logoSrc} alt="logo" style={{ height: 36 }} />
            <div>
              <h1 style={{ margin: 0, color: COLORS.dark }}>Export Data</h1>
              <p style={{ margin: '6px 0 0', color: COLORS.textMuted }}>Choose a format and export the latest orders.</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <Button variant="primary" onClick={() => downloadCSV(sampleOrders, 'orders.csv')}>Download CSV</Button>
            <Button variant="danger" onClick={() => exportPDF(sampleOrders, 'orders')}>Export PDF</Button>
          </div>
        </div>

        <div style={{ background: '#fff', padding: SPACING.large, borderRadius: 12, boxShadow: '0 10px 30px rgba(2,6,23,0.06)' }}>
          <h2 style={{ marginTop: 0, marginBottom: SPACING.medium }}>Preview</h2>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
              <thead>
                <tr style={{ background: '#eef2ff', color: COLORS.dark }}>
                  <th style={tableStyle}>Order ID</th>
                  <th style={tableStyle}>Customer</th>
                  <th style={tableStyle}>Status</th>
                  <th style={tableStyle}>Amount</th>
                </tr>
              </thead>
              <tbody>
                {sampleOrders.map((o) => (
                  <tr key={o.id}>
                    <td style={tableStyle}>{o.id}</td>
                    <td style={tableStyle}>{o.customer}</td>
                    <td style={tableStyle}>{o.status}</td>
                    <td style={tableStyle}>{o.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const tableStyle = {
  padding: 12,
  borderBottom: '1px solid #f1f5f9',
  textAlign: 'left'
};

export default AdminExport;
