$( function() {
  /*  var availableTIs = [
  "Accumulative Swing Index (ASI)",
  "Aroon Oscillator (ARO)",
  "Aroon (AR)",
  "Average True Range (ATR)",
  "Bollinger Bands (BBANDS)",
  "Center of Gravity (COG)",
  "Chaikin Money Flow (CMF)",
  "Chaikin Volatility (CV)",
  "Chande Forecast Oscillator (CFO)",
  "Chande Momentum Oscillator (CMO)",
  "Commodity Channel Index (CCI)",
  "Coppock Curve (CC)",
  "Detrended Price Oscillator (DPO)",
  "Directional Movement Index (DMI)",
  "Ease of Movement (EOM)",
  "Elder Fisher Transformation (EFT)",
  "Elder Force Index (EFI)",
  "Elder Ray (ER)",
  "Fractal Chaos Bands (FCB)",
  "Fractal Chaos Oscillator (FCO)",
  "Gopalakrishnan Range Index (GAPO)",
  "High Low Bands (HLB)",
  "High Minus Low (H-L)",
  "Highest High Value (HH)",
  "Historical Volatility (HV)",
  "Ichimoku (ICH)",
  "Intraday Momentum Index (IMI)",
  "Keltner Channel (KC)",
  "Klinger Volume Oscillator (KVO)",
  "Linear Regression Forecast (LRF)",
  "Linear Regression Intercept (LRI)",
  "Linear Regression Slope R2 (R2)",
  "Linear Regression Slope (LRS)",
  "Lowest Low Value (LL)",
  "Mass Index (MI)",
  "Median Price (MP)",
  "Momentum Oscillator (MOM)",
  "Money Flow Index (MFI)",
  "Moving Average (MA)",
  "Moving Average Convergence Divergence (MACD)",
  "Moving Average Envelope (MAE)",
  "On Balance Volume (OBV)",
  "Parabolic Sar (SAR)",
  "Rate of Change (ROC)",
  "Price Volume Trend (PVT)",
  "Relative Strength Indicator (RSI)",
  "Stochastic (STOCH)",
  "Time Series Forecast (TSF)",
  "Triple Exponential Moving Average Oscillator (TRIX)",
  "Trade Volume Index (TVI)",
  "True Range",
  "TT Cumulative Vol Delta (TT_CVD)",
  "Twiggs Money Flow",
  "Typical Price",
  "Ultimate Oscillator (ULTOSC)",
  "Vertical Horizontal Filter",
  "Volume",
  "Volume At Price (VAP)",
  "Volume on the Bid (BVol)",
  "Volume on the Ask (AVol)",
  "Volume Oscillator",
  "Volume Rate of Change",
  "Volume Underlay",
  "Weighted Close",
  "Williams Accumulation Distribution (ACC Dist)",
  "Williams % R (WillR)"
  ];
  
    $("#TIsearch").autocomplete({
      source: availableTIs,
      position: {of: "#TIsearch"},
      appendTo: "#ti-search-div"
    });*/

    $('#TIsearch').keyup(function(){
      console.log("hello")
      var valThis = $(this).val();
      $('.ttdoc-ti-list>li').each(function(){
       var text = $(this).text().toLowerCase();
        (text.indexOf(valThis) > -1) ? $(this).show() : $(this).hide();         
   });
});

    /*$("#ti-search__form").submit(function(){
      value = $("input:first").val();
      console.log(value);
    });*/

  } );