import React from "react";
import { useNavigate } from "react-router-dom";
import { COLORS, SPACING } from "../constants/colors";
import { Button } from "../components/common/Button";
import Navbar from "../components/layout/NavBar";
import logoSrc from "../assets/images/track.png";
import { StatsSection } from "../components/common/StatsSection";
import { Footer } from "../components/layout/Footer";

const StatCard = ({ title, value }) => (
  <div style={{ background: "#fff", padding: SPACING.medium, borderRadius: 12, width: 220, boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
    <h3 style={{ margin: 0, marginBottom: SPACING.small, color: COLORS.primary }}>{title}</h3>
    <div style={{ fontSize: 20, fontWeight: 700 }}>{value}</div>
  </div>
);
const tableStyle = {
  padding: "12px",
  borderBottom: "1px solid #eee",
  textAlign: "left",
  color: COLORS.dark
};

const AdminDashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { title: "Total Orders", value: "1,250" },
    { title: "Pending Orders", value: "320" },
    { title: "Delivered", value: "880" },
    { title: "Total Revenue", value: "৳145,000" },
  ];

  const orders = [
    { id: "#TRI1021", customer: "John Doe", status: "Pending", amount: "৳120", statusColor: "#f59e0b" },
    { id: "#TRI1022", customer: "Jane Smith", status: "Delivered", amount: "৳50", statusColor: "#10b981" },
    { id: "#TRI1023", customer: "Robert Brown", status: "In Transit", amount: "৳200", statusColor: "#60a5fa" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: COLORS.lightGray, color: COLORS.dark }}>
      <Navbar />

      <div style={{ display: "flex", flex: 1 }}>
        <aside
          style={{
            width: 260,
            backgroundColor: COLORS.dark,
            color: "#e6eef8",
            padding: SPACING.large,
            display: "flex",
            flexDirection: "column",
            gap: SPACING.medium,
            boxShadow: "2px 0 12px rgba(0,0,0,0.12)",
          }}
        >
          <h2 style={{ margin: 0, color: COLORS.primary, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8 }}>
            <img src="/vite.svg" alt="logo" width="24" height="24" /> TRI Admin
          </h2>

          <Button variant="primary" onClick={() => navigate("/admin")}>
            Dashboard
          </Button>
          <Button variant="primary" onClick={() => navigate("/admin/orders")}>
            Manage Orders
          </Button>
          <Button variant="primary" onClick={() => navigate("/admin/users")}>
            Manage Users
          </Button>

          <div style={{ marginTop: "auto" }}>
            <Button variant="danger" onClick={() => navigate("/")}>
              Logout
            </Button>
          </div>
        </aside>

        <main style={{ flex: 1, padding: SPACING.xlarge, color: '#0f1724' }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: SPACING.large }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: SPACING.medium }}>
              <h1 style={{ margin: 0, color: COLORS.dark, fontSize: 28 }}>Admin Dashboard</h1>
              <img src={logoSrc} alt="logo" style={{ height: 36 }} />
            </div>
            <p style={{ margin: '4px 0 0', color: COLORS.textMuted }}>Overview of recent activity and performance</p>
            <div style={{ display: 'flex', gap: 12 }}>
              <Button variant="primary" onClick={() => navigate('/admin/export')}>Export</Button>
              <Button variant="danger">Generate Report</Button>
            </div>
          </div>

          <StatsSection />

          <div style={{ display: "flex", gap: SPACING.large, margin: `${SPACING.large} 0`, flexWrap: "wrap" }}>
            {stats.map((stat) => (
              <StatCard key={stat.title} title={stat.title} value={stat.value} />
            ))}
          </div>

          <section style={{ background: "#fff", padding: SPACING.large, borderRadius: 12, boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
            <h2 style={{ marginTop: 0, marginBottom: SPACING.medium, color: COLORS.dark }}>Recent Orders</h2>

              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: 'fixed' }}>
                  <thead>
                    <tr style={{ background: "#eef2ff", color: COLORS.dark }}>
                      <th style={tableStyle}>Order ID</th>
                      <th style={tableStyle}>Customer</th>
                      <th style={tableStyle}>Status</th>
                      <th style={tableStyle}>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id}>
                        <td style={tableStyle}>{order.id}</td>
                        <td style={tableStyle}>{order.customer}</td>
                        <td style={{ ...tableStyle, color: order.statusColor }}>{order.status}</td>
                        <td style={tableStyle}>{order.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
