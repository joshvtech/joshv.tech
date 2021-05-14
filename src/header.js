export default function Header() {
    return (
        <div id="header" className="mb-3">
            <div style={{backgroundColor: "var(--my-red)", borderRadius: "0 0 24px 24px", minHeight: "125px"}}></div>
            <div className="row px-5" style={{marginTop: "-100px"}}>
                <div className="col-12 col-md-6 text-center text-md-left">
                    <img src="/Logo_Red.jpg" className="rounded-circle" style={{height: "200px"}}></img>
                </div>
                <div className="col d-md-flex text-center text-md-left">
                    <div className="align-self-md-center">
                        <h1 className="mb-1 accent display-4">Joshua Vaughan</h1>
                        <h4>07518 387243</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}