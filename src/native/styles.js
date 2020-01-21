import { Dimensions } from 'react-native';
import Constants from '../constants/Constants';



export default {
    container: {
        flex: 1,
        backgroundColor: '#efefef',
        alignItems: 'center',

    },
    fullcontainer: {
        flex: 1,
        backgroundColor: '#feffff',
        alignItems: 'center',

    },
    headerStyle: {
        backgroundColor: 'white',
        width: Constants.ScreenSize.width,
        justifyContent: 'flex-start',
        shadowColor: 'transparent',
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
        },
        borderBottomWidth: 0,
        alignItems: 'center'
    },
    headerTitle: {
        fontFamily: Constants.FontFamily.regular,
        color: '#595959',
        fontSize: Constants.ScreenSize.scale < Constants.baseScale || Constants.ScreenSize.width < Constants.baseWidth ? 18 : 20,
        marginLeft: Constants.ScreenSize.scale < Constants.baseScale || Constants.ScreenSize.width < Constants.baseWidth ? 5 : 10,
        //backgroundColor:'blue'
    },
    headerLeftWithTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 0,
        width: Constants.ScreenSize.scale < Constants.baseScale || Constants.ScreenSize.width < Constants.baseWidth ? 35 : 40,

        //backgroundColor: 'blue'
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 0,
        width: 60,
    },

    addReviewTitle: {
        fontFamily: Constants.FontFamily.regular,
        color: '#3c3c3c',
        fontSize: Constants.ScreenSize.scale < Constants.baseScale || Constants.ScreenSize.width < Constants.baseWidth ? 16 : 18,
    },
    addReviewSubTitle: {
        fontFamily: Constants.FontFamily.regular,
        color: '#3c3c3c',
        fontSize: 13,
        width: '65%',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    roundedTabButtonContainer: {
        marginTop: 5,
        backgroundColor: '#feffff',
        width: '100%',
        paddingTop: 5,
        paddingBottom: 5,
        alignItems: 'center',
        borderRadius: 3,
        minHeight: Constants.ScreenSize.height * 10 / 100,
    },
    roundedGridContainer: {
        marginTop: 5,
        backgroundColor: '#feffff',
        width: '100%',
        //padding: 5,
        //alignItems: 'center', 
        borderRadius: 3,
        minHeight: Constants.ScreenSize.height * 10/ 100,
    },
    
    gridHeaderContainer: {
        marginTop: 5,
        backgroundColor: Constants.Colors.grey,
        width: '95%',
        //padding: 5,
        //alignItems: 'center', 
        borderRadius: 3,
        marginLeft:10,
        marginRight:20,
        minHeight: Constants.ScreenSize.height * 4 / 100,
    },
    gridAccordianContainer: {
        marginTop: 5,
        backgroundColor: Constants.Colors.grey,
        width: '95%',
        flexDirection:'row',
        justifyContent:'space-between',
        //padding: 5,
        //alignItems: 'center', 
        borderRadius: 3,
        marginLeft:10,
        marginRight:20,
        minHeight: Constants.ScreenSize.height * 4 / 100,
    },
    gridContentContainer: {
        marginTop: 5,
        marginBottom:5,
       //  backgroundColor:'powderblue',
        width: '95%',
        //padding: 5,
        //alignItems: 'center', 
        borderRadius: 9,
        marginLeft:10,
        marginRight:10,
       // minHeight: Constants.ScreenSize.height * 1 / 100,
    },
    fullheightroundedGridContainer: {
        marginTop: 5,
        backgroundColor: '#feffff',
        width: '100%',
        //padding: 5,
        //alignItems: 'center', 
        flex: 1,
        borderRadius: 3,
        paddingBottom: 100
    },
    smallroundedGridContainer: {
        marginTop: 5,
        backgroundColor: '#feffff',
        width: '100%',
        //padding: 5,
        //alignItems: 'center', 
        borderRadius: 3,

    },
    listFilterContainer: {
        marginTop: 5,
        flexDirection: 'row',
        backgroundColor: '#feffff',
        width: '100%',
        height: Constants.ScreenSize.height * 5 / 100,
        minHeight: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 3,
        paddingLeft: 3,
        paddingRight: 3

    },
    smallroundContainer: {
        marginTop: 5,
        paddingBottom: 5,
        paddingTop: 5,
        flexDirection: 'row',
        backgroundColor: '#feffff',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 3,
        paddingLeft: 3,
        paddingRight: 3

    },
    smallContainer: {
        marginTop: 5,
        paddingBottom: 5,
        paddingTop: 5,
        flexDirection: 'row',
        backgroundColor: '#feffff',
        width: '100%',

        alignItems: 'center',
        borderRadius: 3,
        paddingLeft: 3,
        paddingRight: 3

    },
    tabButtonContainer: {
        backgroundColor: '#dadada',
        width: '97%',
        marginTop: 5,
        borderRadius: 3,
        flexDirection: 'row'
    },
    contentContainer: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 6,
        backgroundColor: '#feffff',
        width: '97%',
        height: '100%'
    },
    fullContentContainer: {

        backgroundColor: '#feffff',
        width: '100%',
        //height:'100%'
    },
    homecontentContainer: {
        marginLeft: 10,
        marginRight: 10,
       //backgroundColor: 'red',
        width: '98%',
        //height: '100%',
        flex: 1,
        paddingBottom: 50
    },
    formContainer: {
        flex: 1,
        //marginTop: Constants.ScreenSize.height * 15 / 100,
        marginRight: 10,
        marginLeft: 10,
        //height: '100%',

        height: Constants.ScreenSize.height - 100,
        alignItems: 'center',
        justifyContent: 'center'
    },

    fullformContainer: {
        flex: 1,
        //marginTop: Constants.ScreenSize.height * 15 / 100,
        marginRight: 5,
        marginLeft: 5,
        //height: '100%',
        height: Constants.ScreenSize.height - 100,
    },


    formInput: {
        marginTop: 10,
        fontFamily: Constants.FontFamily.regular
    },
    nativeFormInput: {
        marginTop: 10,
        fontFamily: Constants.FontFamily.regular,


    },
    pickerPlaceholderStyle: { color: "#575757", fontFamily: Constants.FontFamily.regular, paddingLeft: 5 },
    label: {
        color: '#3d3d3d',
        fontFamily: Constants.FontFamily.regular
    },
    profileImage: { height: 75, width: 75, borderRadius: 75 / 2 },
    profileImagePosition: { marginLeft: 15 },
    defaultProfileImage: { color: 'white', fontSize: Constants.ScreenSize.scale < Constants.baseScale || Constants.ScreenSize.width < Constants.baseWidth ? 60 : 80, marginBottom: 0, paddingBottom: 0 },
    transparentMenuButtonText: {
        fontSize: 18,
        color: 'white',
        fontFamily: Constants.FontFamily.semibold
    },
    transparentButton: {
        justifyContent: 'flex-end',
        width: '100%',
    },
    transparentButtonText: {
        fontSize: 15,
        color: '#027878',
        fontFamily: Constants.FontFamily.regular
    },
    underlinetransparentButtonText: {
        fontSize: 16,
        fontWeight: '400',
        color: '#027878',
        fontFamily: Constants.FontFamily.regular,
        textDecorationLine: 'underline'
    },
    smalltransparentButtonText: {
        fontSize: 13,
        color: '#027878',
        fontFamily: Constants.FontFamily.regular,
        textDecorationLine: 'underline'
    },
    bigTransparentButton: {
        justifyContent: 'center',
        width: '100%',
        marginTop: 35
    },
    bigTransparentButtonText: {
        fontSize: Constants.ScreenSize.scale < Constants.baseScale || Constants.ScreenSize.width < Constants.baseWidth ? 16 : 18,
        color: '#027878',
        textDecorationLine: 'underline',
        fontFamily: Constants.FontFamily.semibold,

    },
    submitButtonText: {
        color: 'white',
        fontSize: Constants.ScreenSize.scale < Constants.baseScale || Constants.ScreenSize.width < Constants.baseWidth ? 17 : 18,
        fontFamily: Constants.FontFamily.regular,
        fontWeight: '400'
    },
    smallTrashIcon:{
        fontSize:15,
        height:15,
        width:15,
        color: '#e80909',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingLeft: 0,
        paddingRight: 0,
        marginLeft: 0,
        marginRight: 0, 
   },
    addAddressButtonText: {
        color: 'white',
        fontSize: Constants.ScreenSize.scale < Constants.baseScale || Constants.ScreenSize.width < Constants.baseWidth ? 14 : 15,
        fontFamily: Constants.FontFamily.regular,
        fontWeight: '400',
        backgroundColor:Constants.Colors.secondary,
        paddingLeft:10,
        paddingRight:10,
       paddingTop: 10,
       paddingBottom: 10,
        alignItems:'center',
        textAlignVertical:'center'
    },
    submitButton: {
        backgroundColor: Constants.Colors.primary,
        height: 50
    },
    actionPanel: {
        marginTop: 4,

        width: '100%'
    },
    signupformContainer: {
        flex: 1,
        //marginTop: Constants.ScreenSize.height * 25 / 100,
        marginRight: 10,
        marginLeft: 10,
        height: Constants.ScreenSize.height - 100,
        alignItems: 'center',
        justifyContent: 'center'
    },

    signupactionPanel: {

        marginTop: 40,
        width: '100%'
    },
    otpinput: {
        width: '15%',
        marginLeft: 5,
        marginRight: 5,
        fontFamily: Constants.FontFamily.regular,
    },
    otptxtinput: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: Constants.FontFamily.regular,
    },

    smallTransparentButton: {
        fontSize: 14,
        color: '#027878',
        fontFamily: Constants.FontFamily.semibold,
        textDecorationLine: 'underline'
    },
    otpactionPanel: {
        marginTop: 60,
        marginLeft: 15,
        marginRight: 15,
        width: '100%'
    },
    smallButtonText: {
        color: 'white',
        fontSize: 14,
        fontFamily: Constants.FontFamily.semibold,
        fontWeight: '400'
    },
    mediumButtonText: {
        color: 'white',
        fontSize: 15,
        fontFamily: Constants.FontFamily.semibold,
        fontWeight: '400'
    },
    smallButton: {
        backgroundColor: Constants.Colors.primary,
        height: 45,
        borderRadius: 0,
        borderWidth: 1,
        borderColor: '#c06401'

    },
    smallTabButtonSelected: {
        backgroundColor: Constants.Colors.primary,
        height: 45,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#c06401',
        marginLeft: 3,
        marginTop: 3,
        marginBottom: 3

    },
    smallTabButton: {
        backgroundColor: 'white',
        height: 45,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#bfbfbf',
        marginLeft: 3,
        marginTop: 3,
        marginBottom: 3

    },
    smallTabButtonText: {
        color: '#737373',
        fontSize: 14,
        fontFamily: Constants.FontFamily.semibold,
        fontWeight: '400'

    },
    xsmallButton: {
        backgroundColor: Constants.Colors.primary,
        height: 30,
        borderRadius: 0
    },

    xsmalladdButton: {
        backgroundColor: Constants.Colors.secondary,
        height: 33
    },
    xsmallnotifyButton: {
        backgroundColor: Constants.Colors.primary,
        height: 33
    },
    smalladdButtonText: {
        color: 'white',
        fontSize: Constants.ScreenSize.scale < Constants.baseScale || Constants.ScreenSize.width < Constants.baseWidth ? 12 : 16,
        fontFamily: Constants.FontFamily.semibold,
        textAlignVertical: 'center',
        alignSelf: 'center'
    },
    errorText: {
        color: 'red',
        fontSize: 13,
        //marginLeft: 22,
        //marginRight: 22,
        marginTop: 10,
        fontFamily: Constants.FontFamily.semibold,
    },
    textInputStype: {
        height: 50,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1
    },
    menuList: {
        marginTop: 3,
        backgroundColor: "white",
        borderRadius: 3
    },
    menuItemIcon: {
        color: "#017777",
        fontSize: 20
    },

    addressType: {
        borderWidth: 3, borderColor: '#efefef', backgroundColor: '#efefef',
        borderRadius: 120, width: 60, height: 60, justifyContent: 'center', alignItems: 'center', marginBottom: 10
    },
    addressTypeIcon: {
        justifyContent: 'center',
        width: 24,
        height: 24,
        alignItems: 'center',
        textAlign: 'center',
        paddingLeft: 0,
        paddingRight: 0,
        marginLeft: 0,
        marginRight: 0,
    },
    addressTypeSelected: {
        borderWidth: 4, borderColor: '#efefef', backgroundColor: Constants.Colors.primary,
        borderRadius: 120, width: 60, height: 60, justifyContent: 'center', alignItems: 'center', marginBottom: 10
    },
    addressTypeSelectedIcon: {
        justifyContent: 'center',
        width: 24,
        height: 24,
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        paddingLeft: 0,
        paddingRight: 0,
        marginLeft: 0,
        marginRight: 0,
    },
    topSection: {
        flex: 1,
        backgroundColor: Constants.Colors.primary,
        justifyContent: 'flex-end',
        paddingTop: 20

    },
    categorySliderButton: {
        width: Constants.ScreenSize.width * 18 / 100,
        height: 80,
        alignItems: 'center',
        paddingBottom: 15
    },
    categorySliderButtonContainer: {
        flexDirection: 'column',
        width: '100%',
        height: 80,
        //flex: 1,
        alignItems: 'center'

    },
    categorySliderIcon: {
        // width: 40,
        // height: 40,
        height: 45,
        aspectRatio: 0.9 / 1,
        paddingRight: 10,
        marginTop: 10
    },
    categoryButtonIcon: {
        width: 50,
        height: 50,
        marginRight: 5
    },
    categorySliderIconText: {
        width: '90%',
        fontSize: 8,
        textAlign: 'center',
        justifyContent: 'flex-start',
        paddingRight: 0,
        paddingLeft: 0,
        color: '#3d3d3d',
        fontFamily: Constants.FontFamily.regular,
        fontWeight: '700',
        marginBottom: 10
    },
    menuText: {
        fontFamily: Constants.FontFamily.regular,
        fontSize: 15
    },
    searchHistorymenuText: {
        fontFamily: Constants.FontFamily.semibold,
        color: Constants.Colors.secondary,
        fontSize: 15,
        height:'100%'
    },
    searchHistorymenuIcon: { color: '#979797', fontSize: 20, fontWeight: '500' },
    searchResultsText: {
        fontFamily: Constants.FontFamily.semibold,
        fontSize: 15,
        color: Constants.Colors.secondary
    },
    issuesListText: {
        fontFamily: Constants.FontFamily.regular,
        fontSize: 15,
        color: '#3c3c3c',
        fontWeight: '400'
    },
    sliderproductCard: {
        width: Constants.ScreenSize.width * 40 / 100,
        height: 280,
        marginLeft: 3,
        marginRight: 3,
        marginBottom: 3,
        flexDirection: 'column',
        //paddingRight: 8,
        marginTop: 0,
        padding: 0,
        justifyContent: 'center',
    },
    listproductCard: {
        width: Constants.ScreenSize.width * 48 / 100,
        height: 280,
        marginLeft: '0.5%',
        marginRight: '0.5%',
        flexDirection: 'column',
        marginTop: 2,
        marginBottom: 2,
        paddingTop: 0,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#e7e7e7'
    },
    gridproductCard: {
        width: '100%',
        height: 150,
        margin: 0,
        padding: 0,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#e7e7e7',
        //backgroundColor:'blue'
    },
    istShopForFreeContainer: {
        marginTop: 8,
        marginBottom: 5,
        flexDirection: 'row',
        backgroundColor: '#feffff',
        width: '100%',
        height: Constants.ScreenSize.height * 3 / 100,
        minHeight: 40,
        alignItems: 'center',
        borderRadius: 3,
        paddingLeft: 3,
        paddingRight: 3

    },
    cartProductCard: {
        width: '100%',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#e7e7e7'
    },
    productBankOfferSectionTitle: {
        fontFamily: Constants.FontFamily.semibold,
        fontSize: 14,
        color: Constants.Colors.primary,
        width: '78%',
        paddingLeft: 10,

    },
    cartleftContainer: {
        width: Constants.ScreenSize.width * 30 / 100,
        left: -10,
        alignItems: 'center'
    },

    loader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: Constants.ScreenSize.height * 70 / 100
    },
    listIcons: {
        fontSize: 30,
        color: Constants.Colors.secondary,
        marginRight: 5,
        marginLeft: 5
    },

    addedtoBagIcon: {
        fontSize: 30,
        color: '#639903',
        marginRight: 2,
        marginLeft: 2
    },
    productTitle: {
        fontFamily: Constants.FontFamily.regular,
        fontSize: 14,
        color: '#232323',
        width: '100%',
        height: 40,

    },
    menuIcon: {
        fontSize: Constants.ScreenSize.scale < Constants.baseScale || Constants.ScreenSize.width < Constants.baseWidth ? 20 : 25,
        color: Constants.Colors.primary,
        marginLeft: 10
    },
    smallMenuIcon: {
        fontSize: 20,
        color: Constants.Colors.primary
    },
    productdetailmenuIcon: {
        fontSize: 30,
        color: Constants.Colors.light,
        marginRight: 10,
        marginLeft: 10

    },
    smallNotInWishlistMenuIcon: {
        fontSize: 20,
        color: '#d6d6d6'
    },
    navigationMenuIcon: {
        fontSize: Constants.ScreenSize.scale < Constants.baseScale || Constants.ScreenSize.width < Constants.baseWidth ? 35 : 40,
        color: Constants.Colors.secondary
    },
    productImage: {
        // width: '60%',
        // height: '40%',

    },
    otpContainer: {
        flexDirection: 'row',
        //     alignSelf: 'center',
        //    justifyContent: 'center',
        width: Constants.ScreenSize.width < 350 ? '90%' : '70%',
        //     position:'relative'
    },
    otpFormContainer: {
        flex: 1,
        //marginTop: Constants.ScreenSize.height * 15 / 100,
        marginRight: 10,
        marginLeft: 10,
        //height: '100%',

        height: Constants.ScreenSize.height / 2,
        alignItems: 'center',
        justifyContent: 'center',

    },
    sectionTitle: {
        fontFamily: Constants.FontFamily.semibold,
        fontSize: 20,
        color: Constants.Colors.secondary,
        width: '78%'
    },
    bigTitle: {
        fontFamily: Constants.FontFamily.semibold,
        fontSize: 20,
        color: Constants.Colors.secondary,
        width: '100%',
        textAlign: 'center'
    },
    mediumTitle: {
        fontFamily: Constants.FontFamily.semibold,
        fontSize: 18,
        color: Constants.Colors.secondary
    },
    section: {
        flexDirection: 'row',
        flex: 1, width: '100%',
        marginTop: 15,
        marginBottom: 10
    },
    activeDot: {
        backgroundColor: Constants.Colors.primary,
        width: 10,
        height: 10,
        borderRadius: 10,
        margin: 5
    },
    dot: {
        backgroundColor: Constants.Colors.light,
        width: 10,
        height: 10,
        borderRadius: 10,
        margin: 5
    },
    //   menuIcon:{
    //     fontSize: 30, 
    //     color: Constants.Colors.light,
    //     marginRight: 10,
    //     marginLeft: 10

    // },
    bigProductTitle: {
        fontFamily: Constants.FontFamily.regular,
        fontSize: 20,
        color: '#232323',
        width: '100%'
    },
    bigProductPrice: {
        fontSize: Constants.ScreenSize.scale < Constants.baseScale || Constants.ScreenSize.width < Constants.baseWidth ? 16 : 17,
        fontFamily: 'OpenSans-SemiBold',
        //width: '100%', 
        marginTop: 10,
        marginBottom: 10,
        //backgroundColor:'blue',
        textAlignVertical: 'bottom',
        color: '#313131',
        alignSelf: 'flex-end'
    },
    bigProductMrpPrice: {
        fontSize: Constants.ScreenSize.scale < Constants.baseScale || Constants.ScreenSize.width < Constants.baseWidth ? 14 : 15,
        fontFamily: 'OpenSans-SemiBold',
        //width: '100%', 
        marginTop: 10,
        marginLeft: 10,
        color: Constants.Colors.light,
        textDecorationLine: 'line-through',
        marginBottom: 10,
        textAlignVertical: 'bottom',
        // backgroundColor:'blue',
        alignSelf: 'flex-end'
    },
    smallProductDiscount: {
        fontSize: 13,
        fontFamily: 'OpenSans-SemiBold',
        //width: '100%', 
        marginTop: 10,
        marginLeft: 10,
        color: 'red',
        marginBottom: 10,
        textAlignVertical: 'bottom',
        // backgroundColor:'blue',
        alignSelf: 'flex-end'
    },
    productPrice: {
        fontSize: Constants.ScreenSize.scale < Constants.baseScale || Constants.ScreenSize.width < Constants.baseWidth ? 16 : 18,
        fontFamily: 'OpenSans-SemiBold',
        color: '#313131'
    },
    productMrpPrice: {
        fontSize: Constants.ScreenSize.scale < Constants.baseScale || Constants.ScreenSize.width < Constants.baseWidth ? 16 : 18,
        fontFamily: 'OpenSans-SemiBold',
        color: Constants.Colors.light,
        textDecorationLine: 'line-through',


    },
    variantWeight: {
        fontSize: Constants.ScreenSize.scale < Constants.baseScale || Constants.ScreenSize.width < Constants.baseWidth ? 18 : 20,
        fontFamily: 'OpenSans-SemiBold',
        marginTop: 10,
        marginBottom: 10,
        color: '#313131',
        width: '35%',
        flex: 1,
        alignSelf: 'center'
    },
    variantDiscountPrice: {
        fontSize: Constants.ScreenSize.scale < Constants.baseScale || Constants.ScreenSize.width < Constants.baseWidth ? 14 : 16,
        fontFamily: 'OpenSans-SemiBold',
        color: 'red',
    },
    starRatingIcon: {
        color: "#efcf49",
        fontSize: 15,
        marginLeft: 2,
        //marginRight:2
    },

    averageRatingText: {
        fontSize: 13,
        fontFamily: 'OpenSans-SemiBold',
        color: 'white'
    },
    reviewsText: {
        fontSize: 13,
        fontFamily: 'OpenSans-SemiBold',
        color: Constants.Colors.light,
        marginLeft: 5
    },
    selectedVariantButton: {
        backgroundColor: "#ffedd9",
        borderWidth: 1,
        borderRadius: 1,
        borderColor: '#ffedd9',
        minHeight: 45,
        height: Constants.ScreenSize.width * 13 / 100,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 2,
        paddingLeft: 5
    },
    unSelectedVariantButton: {
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 1,
        borderColor: '#a1a1a1',
        minHeight: 45,
        height: Constants.ScreenSize.width * 13 / 100,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 2,
        paddingLeft: 5
    },
    selectedVariant: {
        backgroundColor: '#e47701',

        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: 1
        // minWidth: 45, 
        // width:Constants.ScreenSize.width * 13 / 100

    },
    unSelectedVariant: {
        backgroundColor: '#f2f2f2',

        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: 1
        // minWidth: 45, 
        // width:Constants.ScreenSize.width * 13 / 100

    },
    expandableVariant: {
        backgroundColor: '#f2f2f2',

        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: 1
        // minWidth: 45, 
        // width:Constants.ScreenSize.width * 13 / 100

    },
    productDetailSectionTitle: {
        fontFamily: Constants.FontFamily.semibold,
        fontSize: 18,
        color: Constants.Colors.primary,
        width: '78%'
    },

    internalSectionTitle: {
        fontFamily: Constants.FontFamily.semibold,
        fontSize: 18,
        color: Constants.Colors.primary
    },


    productDetailSecondarySectionTitle: {
        fontFamily: Constants.FontFamily.semibold,
        fontSize: 17,
        textAlign: 'center',
        color: Constants.Colors.secondary,
        width: '100%'
    },
    productParagraphSection: {
        fontFamily: Constants.FontFamily.regular,
        fontSize: 14,
        color: '#393939',
        width: '100%',
        marginTop: 10,
        marginBottom: 10
    },
    starRatingBigIcon: {
        color: "#efcf49",
        fontSize: 30
    },
    starRatingSmallIcon: {
        color: "#efcf49",
        fontSize: 15
    },
    productRatingSectionTitle: {
        fontFamily: Constants.FontFamily.regular,
        fontSize: Constants.ScreenSize.scale < Constants.baseScale || Constants.ScreenSize.width < Constants.baseWidth ? 14 : 17,
        color: '#393939',
        width: '50%'
    },
    lineStyle: {
        borderWidth: 0.7,
        borderColor: '#e1e1e1',
        margin: 10,
    },
    secondaryThemeButton: {
        backgroundColor: Constants.Colors.secondary,
        borderRadius: 0,
        alignSelf: 'center',
        width: '60%',
        alignItems: 'center',
        height: 50,
        padding: 0,
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 25
    },
    genericSecondaryThemeButton: {
        backgroundColor: Constants.Colors.secondary,
        borderRadius: 0,
        alignSelf: 'center',
        width:'97%',
        alignItems: 'center',
        height: 45,
        padding: 0,
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 5
    },
    smallSecondaryThemeButton: {
        backgroundColor: Constants.Colors.secondary,
        borderRadius: 0,
        alignSelf: 'center',
        width: '50%',
        alignItems: 'center',
        height: 50,
        padding: 0,
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 25
    },
    secondaryThemeButtonText: {
        fontFamily: Constants.FontFamily.semibold,
        fontSize: 15,
        color: 'white',
        width: '80%',
        height: 43,
        margin: 0,
        textAlign: 'center'
    },
    overlayHeaderText: {
        color: Constants.Colors.secondary,
        fontFamily: Constants.FontFamily.regular,
        fontSize: Constants.ScreenSize.scale < Constants.baseScale || Constants.ScreenSize.width < Constants.baseWidth ? 13 : 15,
        fontWeight: '300'

    },
    overlayText: {
        color: Constants.Colors.overlaytext,
        fontFamily: Constants.FontFamily.regular,

    },
    overlayLightText: {
        color: Constants.Colors.overlaytextlight,
        fontFamily: Constants.FontFamily.regular,

    },
    overlayDarkText: {
        color: Constants.Colors.overlaytextdark,
        fontFamily: Constants.FontFamily.regular,
        fontWeight: 'bold'
    },
    arrowIcon: {
        fontSize: Constants.ScreenSize.scale < Constants.baseScale || Constants.ScreenSize.width < Constants.baseWidth ? 10 : 12,
        color: Constants.Colors.outlineButtonIcon
    },
}
