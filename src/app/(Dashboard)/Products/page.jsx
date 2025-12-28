export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Users" value="1,245" />
        <StatCard title="Revenue" value="$32,540" />
        <StatCard title="Orders" value="418" />
      </div>

      {/* Content */}
      <div className="bg-white rounded-xl p-6 shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <p className="text-gray-600">
          Your recent system activity will appear here.
        </p>
      </div>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}
