import React from 'react';
import {Helmet} from 'react-helmet';

export default function Layout(props){
  let OGImage= "/src/asset/icon-.jpg"
  return(
    <div>
      <Helmet>
        <title>Mobility React Assesment</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initialScale=1.0" />
        <meta name="google" content="notranslate" />
        <meta name="application-name" content="&nbsp;"/>
        <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,700i" rel="stylesheet"/>


          <link rel="apple-touch-icon" sizes="57x57" href={OGImage}/>
          <link rel="apple-touch-icon" sizes="60x60" href={OGImage}/>
          <link rel="apple-touch-icon" sizes="72x72" href={OGImage}/>
          <link rel="apple-touch-icon" sizes="76x76" href={OGImage}/>
          <link rel="apple-touch-icon" sizes="114x114" href={OGImage}/>
          <link rel="apple-touch-icon" sizes="120x120" href={OGImage}/>
          <link rel="apple-touch-icon" sizes="144x144" href={OGImage}/>
          <link rel="apple-touch-icon" sizes="152x152" href={OGImage}/>
          <link rel="apple-touch-icon" sizes="180x180" href={OGImage}/>
          <link rel="icon" type="image/png" sizes="192x192"  href={OGImage}/>
          <link rel="icon" type="image/png" sizes="32x32" href={OGImage}/>
          <link rel="icon" type="image/png" sizes="96x96" href={OGImage}/>
          <link rel="icon" type="image/png" sizes="16x16" href={OGImage}/>
      </Helmet>
    </div>
  )
}