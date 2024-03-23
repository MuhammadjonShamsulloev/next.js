import React, { Suspense } from 'react';
import UserTable from './UserTable';
import Link from 'next/link';

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn ">
        New User
      </Link>
      <table className="table table-bordered">
        <Suspense fallback={<p>Loading...</p>}>
          <UserTable sortOrder={sortOrder} />
        </Suspense>
      </table>
    </>
  );
};

export default UsersPage;
