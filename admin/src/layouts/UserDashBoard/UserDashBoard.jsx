import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import GenericDashboard from "../GenericDashBoard/GenericDashBoard";

const UserDashBoard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();
  const itemsPerPage = 5;

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    setPage(1); // ✅ reset page khi data thay đổi
  }, [users.length]);

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const res = await fetch("https://www.onlysantech.id.vn/api/user");
      const result = await res.json();

      const payload = result.data || [];

      const normalized = payload.map(u => ({
        user_id: u.user_id,
        user_email: u.user_email,
        user_full_name: u.user_full_name,
        user_role_type: u.user_role_type,
        user_phone: u.user_phone,
        user_account_status: u.user_account_status,
        user_email_verified: Boolean(u.user_email_verified),
        user_created_at: u.user_created_at,
        user_last_login: u.user_last_login
      }));

      setUsers(normalized);

    } catch (err) {
      console.error("Fetch users error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleView = (row) => {
    navigate(`/userdetailpage/${row.user_id}`);
  };

  const paginatedUsers = useMemo(() => {
    return users.slice(
      (page - 1) * itemsPerPage,
      page * itemsPerPage
    );
  }, [users, page]);

  const columns = [
    { key: 'user_full_name', title: 'Name', sortable: true },
    { key: 'user_email', title: 'Email', sortable: true },
    { key: 'user_phone', title: 'Phone', sortable: true, render: v => v || '—' },
    { key: 'user_role_type', title: 'Role', sortable: true },
    {
      key: 'user_created_at',
      title: 'Created At',
      sortable: true,
      render: v => v ? new Date(v).toLocaleDateString('vi-VN') : '—'
    },
    { key: 'user_account_status', title: 'Status', sortable: true }
  ];

  return (
    <GenericDashboard
      title="User Management"
      subtitle="Manage user accounts and permissions"
      breadcrumbs={[
        { label: 'Home', path: '/' },
        { label: 'Users' }
      ]}
      titleView="View"
      viewPath="/userdetailpage/:id"
      columns={columns}
      data={paginatedUsers}
      idField="user_id"
      currentPage={page}
      onPageChange={setPage}
      actions={{ view: handleView }}
      showAddButton={false}
      totalItems={users.length}
      itemsPerPage={itemsPerPage}
      loading={loading}
    />
  );
};

export default UserDashBoard;
