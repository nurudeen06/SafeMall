//Sign In section Starts
const signIn = () => {
    const signInV = (
        <div className="card-modal">
                <div className="card-modal-content">
                    <div className="card-modal-content-header">
                        <h1><span style={{textAlign:"center"}}>SafeMall</span><span style={{float: "right"}} className="close">{'\u2613'}</span></h1>
                    </div>
                    <div className="card-modal-content-body">
                        <form action="" method="post">
                            <div>
                                <label htmlFor="email"><h2>Email:</h2></label>
                                <input type="email" name="email" id="email"/>
                            </div>
                            <div>
                                <label htmlFor="password"><h2>Password:</h2></label>
                                <input type="password" name="password" id="password" minLength="8"/>
                            </div>
                            <div>
                                <input type="submit" name="submit" id="submit" value="Sign-In"/>
                            </div>
                        </form>
                    </div>
                    <div className="controls">
                        <div className="sign-in" style={{backgroundColor: "#000"}}>
                            <p style={{color: "#fff"}}>Sign-In</p>
                        </div>
                        <div className="sign-up">
                            <p>Sign-Up</p>
                        </div>
                    </div>
                </div>
            </div>
    )
    ReactDOM.render(signInV,signSection);
    //Sign In Section Ends
    $(".close").on('click',()=>{
        $(".card-modal").css('visibility','hidden')
     })
    $(".sign-up").on('click',()=>{
        signUp()
    })
}
    //Sign Up Section Starts
    const signUp = () => {
        const signUpV = (
            <div className="card-modal">
                    <div className="card-modal-content">
                        <div className="card-modal-content-header">
                            <h1><span style={{textAlign:"center"}}>SafeMall SignUp</span><span style={{float: "right"}} className="close">{'\u2613'}</span></h1>
                        </div>
                        <div className="card-modal-content-body">
                            <form action="" method="post">
                                <div>
                                    <label htmlFor="email"><h2>Email:</h2></label>
                                    <input type="email" name="email" id="email"/>
                                </div>
                                <div>
                                    <label htmlFor="password"><h2>Password:</h2></label>
                                    <input type="password" name="password" id="password" minLength="8"/>
                                </div>
                                <div>
                                    <label htmlFor="country"><h2>Country:</h2></label><br/>
                                    <select id="country" style={{height:"2rem",borderRadius:"0.5rem"}}>
                                        <option>Nigeria</option>
                                        <option>Ghana</option>
                                        <option>U.S.A</option>
                                        <option>Germany</option>
                                        <option>U.K</option>
                                        <option>South Africa</option>
                                        <option>Brazil</option>
                                    </select>
                                </div>
                                <div>
                                    <input type="submit" name="submit" id="submit" value="Sign-Up"/>
                                </div>
                            </form>
                        </div>
                        <div className="controls">
                            <div className="sign-in">
                                <p>Sign-In</p>
                            </div>
                            <div className="sign-up" style={{backgroundColor: "#000"}}>
                                <p style={{color: "#fff"}}>Sign-Up</p>
                            </div>
                        </div>
                    </div>
                </div>
        )
        ReactDOM.render(signUpV,signSection);
    }
$("#sign-btn").on('click',()=>{
        signIn()
})
let bgIno = 2
$("#right").on("click",()=>{
    bgIno +=1
    $(".featured").css({'transform':'skew(180deg)','transition':'background-image 3s, transform 3s','background-image':'url(../images/back'+bgIno+'.jpg)'})
})
$("#left").on("click",()=>{
    bgIno -=1
    $(".featured").css({'transform':'skew(0deg)','transition':'background-image 5s, transform 5s','background-image':'url(../images/back'+bgIno+'.jpg)'})
    
})