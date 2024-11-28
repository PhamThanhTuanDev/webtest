type User = {
    id: number;
    name: string;
    email: string;
  };
  
  export default async function Page() {
    let users: User[] = [];
    let error = false;
  
    try {
        const data = await fetch('https://devnext.click/backend/api/users', { cache: 'no-store' });
        if (!data.ok) {
          throw new Error('API response was not ok');
        }
        users = await data.json();
      } catch {
        error = true; // Không cần khai báo biến 'err'
      }
      
  
    return (
      <div>
        <h1>Danh sách người dùng</h1>
        {error ? (
          <p>Không thể kết nối tới API</p>
        ) : (
          users.map((user) => (
            <div key={user.id}>
              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>
          ))
        )}
      </div>
    );
  }
  