import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";

export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <div className="header">
          <h1 className="title">
            Welcome to{" "}
            <span className="gradient-text-0">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                FPI - Finance Public Investment
                
              </a>
            </span>
          </h1>

          <p className="description">
            {/* Get started by configuring your desired network in{" "}
            <code className="code">src/index.js</code>, then modify the{" "}
            <code className="code">src/App.js</code> file! */}
          </p>

          <div className="connect">
            <ConnectWallet />
          </div>
        </div>

        <div className="grid">
          <a
            href=""
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/portal-preview.png"
              alt="Placeholder preview of starter"
            />
            <div className="card-text">
              <h2 className="gradient-text-1">Organisations ➜</h2>
              <p>
                Make transactions with Organisations in Crypto with FPI
              </p>
            </div>
          </a>

          <a
            href=""
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/dashboard-preview.png"
              alt="Placeholder preview of starter"
            />
            <div className="card-text">
              <h2 className="gradient-text-2">Dashboard ➜</h2>
              <p>
                Manage your all the transactions with in crypto with FPI 
              </p>
            </div>
          </a>

          {/* <a
            href=""
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/templates-preview.png"
              alt="Placeholder preview of templates"
            />
            <div className="card-text">
              <h2 className="gradient-text-3">Organisaions ➜</h2>
              <p>
                Discover and clone template projects showcasing thirdweb
                features.
              </p>
            </div>
          </a> */}
        </div>
      </div>
    </main>
  );
}
