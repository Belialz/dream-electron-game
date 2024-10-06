import './version.css'

export const Version = () => {
    return (
        <div className="version">
            We are using Node.js <span id="node-version"></span>,
            Chromium <span id="chrome-version"></span>,
            and Electron <span id="electron-version"></span>.
        </div>
    )
}