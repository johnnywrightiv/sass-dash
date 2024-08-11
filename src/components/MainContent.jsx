import Card from './Card';
import Button from './Button';

function MainContent() {
  return (
    <main className="main-content">
      <section className="summary">
        <h2>Summary</h2>
        <div className="card-container">
          <Card title="Total Users" value="1,234" />
          <Card title="Active Users" value="987" />
          <Card title="Revenue" value="$12,345" />
        </div>
      </section>
      <section className="actions">
        <h2>Quick Actions</h2>
        <div className="button-container">
          <Button text="Add User" type="primary" />
          <Button text="View Report" type="secondary" />
          <Button text="Export Data" type="tertiary" />
        </div>
      </section>
    </main>
  );
}

export default MainContent;