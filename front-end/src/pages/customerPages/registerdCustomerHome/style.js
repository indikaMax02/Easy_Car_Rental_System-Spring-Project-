import myImage from "../../../assets/image/slider1.jpg"

export const styleSheet={


    container : {
        display : 'flex',
        flexDirection : 'column',
        width : '100vw',
        height : '100vh'

    },

    topHeaderWrapper : {
          display: 'flex',
          flexDirection : 'row',
          justifyContent: 'center',
         alignItems : 'center',
          height : '58px',
          backgroundColor : 'rgba(23,20,23,0.94)'
    },
    contact_container : {
            display : 'flex',
            alignItems : 'center',
            justifyContent : 'center',
            backgroundColor: '#5476EC',
            height: '100%',
            width : '22%'
    },
    after : {
        width: '0',
        height: '0',
       borderTop: '29px solid transparent',
       borderLeft: '30px solid #5476EC',
        borderBottom: '29px solid transparent'
    },
    header_right : {
      /*  backgroundColor : 'blue',*/
        flexGrow:'1',
        height : '70%',
        display : 'flex',
    },
    sm_icons_left :{
        display : 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent :'center',
        listStyle : 'none',



    },
    right_icons : {
        width : "800px",
       display : 'flex',
        flexDirection :'row',
        justifyContent : 'space-between',
        alignItems :'center',

    },

    spacing_div:{
        flexGrow: 1
    },
    loginButton : {

        color: '#898',

        TbPower :{
            color: '#898'
        },
        flexShrink:1
    },
    registerButton : {
        color: '#898',

        TbPower :{
            color: '#898'
        },
        flexShrink:1
    },
    HiSearch : {
        width : '5%',
        height :'50%',
        color : '#898',
        flexShrink:1,
        cursor : 'pointer',
    },


    //nav bar container css

    navBar_container : {
        height : '15%',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center'

    },
    navBar_component : {
          backgroundColor : "white",
          height:'100%',
           width : '90%',
           display : 'flex',
           flexDirection : 'row',
           alignItems : 'center',
           justifyContent : 'space-between'


    },
    navbar_options : {
        width : '60%',
        height : "100%",
        display : 'flex',
        flexDirection : 'row',
        alignItems : "center",
        listStyleType: 'none',
        underline : 'none',
        textDecoration: 'none',
         justifyContent : 'space-around'
    },


    //slider css

    slider_container : {
          display : 'flex',
          alignItems : 'center',
          justifyContent : 'center',
          height : '75%',
        background:"url(" + myImage+ ")no-repeat center center fixed",
        backgroundSize: 'cover'


    },
    slider_div : {
        width : '100%',
        height : '100%',
        background: 'rgba(61, 65, 68, 0.41)',
        backdropFilter: 'blur(3.4px)',
        display : 'flex',
        flexDirection : 'row',
        flexWrap: 'wrap'


    },

    slider_text_container : {
        display : 'flex',
        flexDirection : 'column',
        height : '100%',
        width : '50%',
        justifyContent : 'center',
    },

    slider_text_Button_container : {
        marginLeft : '10px',
        display : 'flex',
        flexDirection : 'row',
        justifyContent :'space-between',
        width : '40%'
    },

    slider_formMain_container: {
        display : 'flex',
        width : '50%',
        height : '100%',
       /* backgroundColor : 'blue',*/
        position : 'relative',
        alignItems : 'center',
        justifyContent : 'center'
    },

    before_style : {
        width: 0,
        height: 0,
        borderTop: '20px solid #5476EC',
        borderLeft: '20px solid transparent',
        position : 'relative',
        top : '50px',
        right: "380px"
    },

    form_backGroudContainer : {

        width : '70%',
        height : '90%',
        display : 'flex',
       /* backgroundColor : 'red',*/
        alignItems : 'center',
        justifyContent : 'center',
        flexDirection : 'row',

    },
    form_backGroud : {
        display : 'flex',
        width : '95%',
        height : '100%',
        backgroundColor : 'white',
        boxShadow : '3px 3px 10px 1px',
        borderRadius : '10px'
    },
    title_container_SliderForm_container : {

        width : '400px',
        height : '70px',
       /* backgroundColor : 'red',*/
        display : 'flex',
        flexDirection : 'row',
        position : 'absolute',
        top : '40px',
        left : '94px',

    },
    after_slider : {
        width: '0',
        height: '0',
        borderTop: '25px solid transparent',
        borderLeft: '30px solid #5476EC',
        borderBottom: '25px solid transparent'
    },

    title_container_SliderForm : {
        backgroundColor: '#5476EC',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        width : '350px',
        height : '50px',


    },






}