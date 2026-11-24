import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { AdminLayout } from '../../components/layout/AdminLayout';

export const AdminWorkspacePage = () => {
  const { navigateTo, meetings, fabrics, showToast } = useApp();
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: 'Linen',
    spec: '280 GSM',
    price: 75,
    width: '145 cm'
  });

  const handleAddProduct = (e) => {
    e.preventDefault();
    showToast(`New fabric "${newProduct.name}" added to catalogue preview!`);
    setShowAddProductModal(false);
  };

  const upcomingMeetingsCount = meetings.filter(m => m.status === 'Upcoming').length;

  return (
    <AdminLayout activeAdminTab="dashboard">
      <div className="space-y-12">
        {/* Quick Actions & Greeting */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="font-label-md text-xs uppercase tracking-wider text-on-surface-variant">
              Management Portal
            </span>
            <h1 className="font-headline-md text-headline-lg-mobile md:text-headline-md text-primary mt-1">
              Welcome back, Admin.
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              Here is what's happening today across showroom bookings and catalogue operations.
            </p>
          </div>
          <button
            onClick={() => setShowAddProductModal(true)}
            className="bg-primary text-on-primary px-6 py-3 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity font-label-md text-label-md uppercase tracking-wider text-xs shadow-sm"
          >
            <span className="material-symbols-outlined text-sm">add</span>
            Add New Product
          </button>
        </div>

        {/* Overview Metrics (Bento Grid Style) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Metric 1 */}
          <div className="bg-surface-container-lowest p-6 border border-outline-variant/50 rounded-xl relative overflow-hidden group hover:border-primary/40 transition-colors">
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <span className="font-label-md text-xs text-tertiary-container bg-tertiary-fixed/30 px-2 py-1 rounded font-semibold">
                Needs Action
              </span>
            </div>
            <div className="relative z-10">
              <p className="font-body-md text-caption text-on-surface-variant uppercase tracking-wider mb-1">
                Active Enquiries
              </p>
              <p className="font-display-lg text-headline-lg text-primary">24</p>
            </div>
          </div>

          {/* Metric 2 */}
          <div
            onClick={() => navigateTo('admin-meetings')}
            className="bg-surface-container-lowest p-6 border border-outline-variant/50 rounded-xl relative overflow-hidden group hover:border-primary/40 transition-colors cursor-pointer"
          >
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">event</span>
              </div>
              <span className="font-label-md text-xs text-on-surface-variant bg-surface-container-high px-2 py-1 rounded">
                This Week
              </span>
            </div>
            <div className="relative z-10">
              <p className="font-body-md text-caption text-on-surface-variant uppercase tracking-wider mb-1">
                Scheduled Consultations
              </p>
              <p className="font-display-lg text-headline-lg text-primary">{upcomingMeetingsCount}</p>
            </div>
          </div>

          {/* Metric 3 */}
          <div
            onClick={() => navigateTo('catalogue')}
            className="bg-surface-container-lowest p-6 border border-outline-variant/50 rounded-xl relative overflow-hidden group hover:border-primary/40 transition-colors cursor-pointer"
          >
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">update</span>
              </div>
              <span className="font-label-md text-xs text-on-surface-variant bg-surface-container-high px-2 py-1 rounded">
                Live
              </span>
            </div>
            <div className="relative z-10">
              <p className="font-body-md text-caption text-on-surface-variant uppercase tracking-wider mb-1">
                Catalogue Textiles
              </p>
              <p className="font-display-lg text-headline-lg text-primary">{fabrics.length}</p>
            </div>
          </div>
        </section>

        {/* Navigation Tiles (Asymmetric Grid) */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Action Tile */}
          <div
            onClick={() => navigateTo('catalogue')}
            className="md:col-span-8 bg-surface-container-lowest rounded-xl border border-outline-variant/50 overflow-hidden group flex flex-col md:flex-row hover:border-primary/40 transition-colors cursor-pointer"
          >
            <div className="w-full md:w-1/2 h-52 md:h-auto bg-surface-container relative">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAQuhVNkonGkMYOoPPnKjZdmQ5-I-rrkZrDf6Lc_Kk9qGRIUiOIhBNYJdD3MzlK1y-p-aO5PmsTg_zNn7TOsLikk6kQldBXS9en3KVWJhMf_NCLif0yx6wfrZ5BL_4JtBMNCXsdug5pnv1WBqnQufEpTLIWIqLC71JY-rKlvZBMK1kldZA1WX5FQPSq-cp-wBg8BpjWq9fsK8W0fgUCJM-lCbcB8FL0ISlfiYhcA15c3iG0b4GmBq-J')"
                }}
              />
            </div>
            <div className="p-8 flex flex-col justify-center w-full md:w-1/2">
              <h2 className="font-headline-md text-headline-md text-primary mb-2">Manage Products</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                Update inventory, adjust pricing, and add new collections to the archive catalogue.
              </p>
              <div className="mt-auto flex items-center text-primary font-label-md text-xs uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                Open Catalogue <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </div>
            </div>
          </div>

          {/* Secondary Tiles */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div
              onClick={() => navigateTo('admin-meetings')}
              className="flex-1 bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/50 hover:border-primary/40 transition-colors group flex flex-col justify-between cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary">calendar_month</span>
                <h3 className="font-headline-md text-body-lg text-primary font-medium">Showroom Schedule</h3>
              </div>
              <p className="font-body-md text-caption text-on-surface-variant mb-4">
                Review client visits, upcoming consultation briefs, and appointment history.
              </p>
              <div className="text-primary font-label-md text-xs uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Manage Appointments <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>

            <div
              onClick={() => navigateTo('contact')}
              className="flex-1 bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/50 hover:border-primary/40 transition-colors group flex flex-col justify-between cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary">forum</span>
                <h3 className="font-headline-md text-body-lg text-primary font-medium">Customer Inquiries</h3>
              </div>
              <p className="font-body-md text-caption text-on-surface-variant mb-4">
                Review incoming client notes, bespoke weave inquiries, and concierge requests.
              </p>
              <div className="text-primary font-label-md text-xs uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Open Inbox <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Add Product Modal */}
      {showAddProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-surface-container-lowest max-w-lg w-full p-8 rounded-2xl border border-outline-variant/40 shadow-2xl relative space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="font-display-lg text-headline-md text-primary">Add New Textile</h2>
              <button onClick={() => setShowAddProductModal(false)} className="text-on-surface-variant hover:text-primary">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleAddProduct} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-label-md text-on-surface-variant mb-1">
                  Textile Name
                </label>
                <input
                  required
                  type="text"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  placeholder="e.g. Imperial Silk Damask"
                  className="w-full bg-surface-container border border-outline-variant/40 p-2.5 rounded text-sm outline-none focus:border-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-label-md text-on-surface-variant mb-1">
                    Category
                  </label>
                  <select
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    className="w-full bg-surface-container border border-outline-variant/40 p-2.5 rounded text-sm outline-none"
                  >
                    <option value="Linen">Linen</option>
                    <option value="Silk">Silk</option>
                    <option value="Cotton">Cotton</option>
                    <option value="Wool">Wool</option>
                    <option value="Synthetic">Synthetic</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-label-md text-on-surface-variant mb-1">
                    Weight / Spec
                  </label>
                  <input
                    type="text"
                    value={newProduct.spec}
                    onChange={(e) => setNewProduct({ ...newProduct, spec: e.target.value })}
                    className="w-full bg-surface-container border border-outline-variant/40 p-2.5 rounded text-sm outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-label-md text-on-surface-variant mb-1">
                  Price Per Yard ($)
                </label>
                <input
                  type="number"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
                  className="w-full bg-surface-container border border-outline-variant/40 p-2.5 rounded text-sm outline-none"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-outline-variant/30">
                <button
                  type="button"
                  onClick={() => setShowAddProductModal(false)}
                  className="px-5 py-2.5 rounded text-xs uppercase tracking-wider font-label-md text-on-surface-variant hover:text-primary"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-primary text-on-primary px-6 py-2.5 rounded text-xs uppercase tracking-wider font-label-md hover:bg-tertiary-container"
                >
                  Save Textile
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};
