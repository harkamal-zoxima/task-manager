import React from 'react';


function Login() {
    return (

        <div style={{ backgroundColor: "white", paddingBottom: 300 }}>
            <img src={logo} className="App-logo"  />
            <input type="text" placeholder="Enter Username"/>
            <input type="text" placeholder="Enter password"/>
            


            <TouchableOpacity style={styles.button}
                onPress={() => this.props.navigation.navigate('MENU')}>
                <Text style={styles.buttontext}>LOG IN</Text>
            </TouchableOpacity>

        </div>



    );
}


export default Login;