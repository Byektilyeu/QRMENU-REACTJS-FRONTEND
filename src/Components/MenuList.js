import React, { Component } from "react";

class MenuList extends Component {
  constructor() {
    super();
    this.state = {
      data: "",
    };
    // this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentDidMount() {
    const user = "http_user1";
    const pass = 9;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://10.0.0.111:3640/rk7api/v0/xmlinterface.xml", true);
    xhr.setRequestHeader("Content-Type", "text/xml;charset=UTF-8");
    xhr.setRequestHeader("Authorization", "Basic " + btoa(user + ":" + pass));
    xhr.onload = function () {
      const data = JSON.parse(xhr.responseText);
      this.setState({ data: data });
    }.bind(this);
    xhr.send(`<?xml version="1.0" encoding="utf-8"?>
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
    
    `);
  }
  render() {
    return <div>hha</div>;
  }
}
export default MenuList;
