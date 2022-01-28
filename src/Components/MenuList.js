import React, { Component } from "react";
import axios from "axios";
import XMLParser from "react-xml-parser";
import { Buffer } from "buffer";
global.Buffer = Buffer;

// import https from "https-browserify";

class MenuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      username: "http_user1",
      password: 9,
      // token: null,
    };
  }

  componentDidMount() {
    const xmlBodyStr = `<?xml version="1.0" encoding="utf-8"?>
    <RK7Query> <RK7Command CMD="GetRefData" RefName="CategList" OnlyActive="1" MacroPropTags="true"   WithMacroProp="1" PropMask="Items.(Ident, Name,  Comment, genname0450, genName0409, genForWeb, genSortForWeb)" >  </RK7Command>
        <RK7Command CMD="GetRefData" RefName="menuitems" OnlyActive="1" MacroPropTags="true"   WithMacroProp="1" PropMask="Items.(Ident,Code,Name, AltName, ModiScheme,SaleObjectType, mainParentIdent, LargeImagePath, Comment, CategPath, genFiskBar, genname0450, genName0409, genForWeb, genSortForWeb, RecommendedMenuItems)" >  </RK7Command>
        <RK7Command CMD="GetRefData" RefName="ModiSchemes" IgnoreDefaults="1" IgnoreEnums="0" MacroPropTags="true" OnlyActive="1" WithChildItems="3" PropMask="items.(Ident,Code, Name),items.RIChildItems.TModiSchemeDetail(Ident, ModiScheme,ModiGroup, ReadOnlyName, UpLimit, DownLimit)">
            <PROPFILTERS>
                <PROPFILTER Name="ModiSchemeType" Value="mstCombo"></PROPFILTER>
            </PROPFILTERS>
        </RK7Command>
        <RK7Command CMD="GetRefData" RefName="ModiGroups" OnlyActive="1" IgnoreEnums="false" MacroPropTags="true" WithBlobsData="true" WithChildItems="3" WithMacroProp="true" PropMask="items.(Ident,Name,Code,genName0409, genName0450, genSortForWeb ),items.RIChildItems.TModifier(ItemIdent, Ident, Name, Code, MainParentIdent, Dish, Comment, genName0409, genName0450, genSortForWeb)">
            <PROPFILTERS>
                <PROPFILTER Name="ModiGroupType" Value="mgtCombo"></PROPFILTER>
            </PROPFILTERS>
        </RK7Command>
        <RK7Command CMD="GetRefData" RefName="Prices" >  </RK7Command>
        <RK7Command CMD="GetRefData" RefName="TradeGroupDetails" >  </RK7Command>
        <RK7Command CMD="GetRefData" RefName="AVAILABILITYSCHEDULES" PropMask="Items.(ItemIdent, ObjectIdent, SalePointID, AvailPeriod)">  </RK7Command>
        <RK7Command CMD="GetRefData" RefName="PERIODDETAILS"> </RK7Command>
    </RK7Query>
    </RK7Query>
    
    `;
    const instance = axios.create({
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });
    instance.get("https://10.0.0.111:3640/rk7api/v0/xmlinterface.xml");

    const agent = new https.Agent({
      rejectUnauthorized: false,
    });

    const username = this.state.username;
    const password = this.state.password;
    const token =
      "Basic " + Buffer.from(username + ":" + password).toString("base64");
    // const config = {
    //   headers: {
    //     Authorization: token,
    //     "Access-Control-Allow-Origin": "*",
    //     "Content-Type": "text/xml",
    //     "content-type": "application/x-www-form-urlencoded",
    //     "Access-Control-Allow-Methods": "GET, POST, PUT",
    //     "Access-Control-Allow-Headers": "Content-Type",
    //   },
    // };
    axios
      .get(
        "https://10.0.0.111:3640/rk7api/v0/xmlinterface.xml",
        {
          headers: {
            Authorization: token,
            "Access-Control-Allow-Origin": "http://localhost:3000/",
            "Content-Type": "text/xml; charset=UTF-8",
            // "content-type": "application/x-www-form-urlencoded",
            // "Access-Control-Allow-Methods": "GET, POST, PUT",
          },
        },
        xmlBodyStr,
        { httpsAgent: agent }
      )
      .then((response) => {
        // const p = [];
        // console.log(response.status);
        const xml = new XMLParser().parseFromString(response.data);
        console.log("--------------------------------------------------");
        // console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        console.log(xml);
      })
      .catch(function (error) {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(
            "+++++++++++++++++++++++++++++++++++++++++++++++++++++++"
          );
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      });
  }

  render() {
    const { menu } = this.state;
    return (
      <div>
        List of menu
        {menu.length
          ? menu.map((menu) => <div key={menu.id}> {menu.title}</div>)
          : null}
      </div>
    );
  }
}

export default MenuList;
