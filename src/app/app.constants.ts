export const CONSTANTS = {
    siteTitle: "RentenPe",
    siteBrowserTitle: "RentenPe",
    lastWeek: "lastWeek",
    lastMonth: "lastMonth",
    currentMonth: "currentMonth",
    customDateRange: "customDateRange",
    dateFilterArr: {
      lastWeek : "Last 7 days",
      lastMonth : "Last Month",
      currentMonth : "Current Month",
      customDateRange : "Custom",
    },
    SITE_DATE_FORMAT: "YYYY-MM-DD", // For development
    SITE_DATETIME_FORMAT: "YYYY-MM-DD hh:mm:ss", // For development  
    CALENDAR_DATE_FORMAT: "DD/MM/YYYY", // For date picker format
    CALENDAR_DATETIME_FORMAT: "DD/MM/YYYY hh:mm A", // For date picker format
    DISPLAY_DATE_FORMAT: "dd-MMM-yyyy", // For display in the application
    DISPLAY_DATETIME_FORMAT: "dd-MMM-yyyy hh:mm a", // For display in the application
    SITE_SQLDATE_FORMAT: "YYYY-MM-DD",  // For api process
    SITE_SQLDATETIME_FORMAT: "YYYY-MM-DD hh:mm:ss", // For api process
    NO_DATA_FOUND_MSG: "No data found!",
    loader:{
      show: false,
      text: "Loading...",
    },
    loaderMsg:"Please wait...",
    dataGrid:{
      class:"w-full",
      styleClass:"p-datatable-striped",
      scrollHeight:"flex",
      rows:10,
      paginator:true,    
      rowsPerPageOptions:[10, 20, 50, 100],
      rowHover:true,
      showCurrentPageReport:true,
      currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} entries",
      filterDelay:"0",
      responsiveLayout:"stack",
      scrollable:true, 
      loading:"loading",
      responsive:true,
      lazy:true,
    },   
  }
  