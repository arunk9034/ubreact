import React, { useEffect,useState } from 'react'
import postscribe from 'postscribe';

function Aboutus() {
  useEffect(() => {
    // const script1 = document.createElement('script');
    
    window.googletag = window.googletag || {cmd: []};
    window.googletag.cmd.push(function() {
      window.googletag.defineSlot('/22678428348/Test_HP_header_728X90', [728, 90], 'div-gpt-ad-1646031348333-0').addService(window.googletag.pubads());
  window.googletag.pubads().enableSingleRequest();
     window.googletag.pubads().disableInitialLoad();
      window.googletag.enableServices();
    });
    window.googletag = window.googletag || {cmd: []}; window.googletag.cmd.push(function() { window.googletag.defineSlot('/22678428348/SDPL_HP_Desktop_ATF_300X250', [300, 250], 'div-gpt-ad-1645339970921-0').addService(window.googletag.pubads());  window.googletag.pubads().enableSingleRequest(); window.googletag.pubads().disableInitialLoad(); window.googletag.enableServices(); })

  window.googletag.cmd.push(function() { window.googletag.display('div-gpt-ad-1646031348333-0'); });
    const script = document.createElement('script');
    script.src = "https://cdn.unibots.in/headerbidding/test_sandesh.js"
    script.async = true;
    document.getElementById("div-ub-2biz").appendChild(script)
  },[])

  return (
    <div>
        <h1>About US</h1>
        <div id="div-gpt-ad-1646031348333-0" style={{minWidth: "728px", minHeight: "90px"}}></div>
        <div id="div-gpt-ad-1645339970921-0" style={{minWidth: "300px", minHeight: "250px"}}></div>
        <div id="div-ub-2biz"></div>
        <p>
                As data has become the business mantra, big data is making its
                way into the cloud. According to IBM, “There’s a fundamental
                shift happening in information technology. Whereas data has
                traditionally been static, the trend is moving it into the
                service layer and moving it away from the desktop.” Cloud
                computing, a term loosely defined, refers to the use of servers
                as a service to store, manage, and process large amounts of
                data. Data centers are being built at an increasing rate around
                the world. This is good for consumers who need a constant
                high-speed Internet connection. For businesses though, big data
                presents major advantages for reducing costs, speeding up
                decision-making, and empowering employees to do more with the
                data they have available. IBM’s willingness to put its weight
                behind big data is a promising sign. What about your customers
                and partners? Will they be satisfied with cloud-based software
                applications and management systems? Only the future knows.
                IBM’s primary competition lies in the cloud-based e-commerce
                space. Amazon, Google, and others are all racing to get a piece
                of the growing cloud pie. In recent years, Cisco jumped into the
                game with its acquisition of NetSuite. However, NetSuite is
                strictly a web-based tool. The ability to use the Internet for
                virtually anything is a huge advantage for anyone hoping to use
                the cloud effectively. You can take any file or folder with you,
                no matter where you are. For example, if you’re traveling to
                India, you can access your email there, make new connections,
                and download anything you want from that particular location.
                The same is true for video, audio, and image files. By putting
                them on an online server, NetSuite gives you the ability to
                share these files securely with anyone, anywhere. But what if
                you don’t need to be in another location to access big data?
                With cloud software, it doesn’t matter. For example, consider a
                health care operation. A team of doctors can access medical
                records no matter where they are located, and they can view
                their digital files wherever they are. That means they can
                collaborate with each other even when they’re on different sides
                of the globe. That is only the beginning of the possibilities.
                There are some cloud service providers who are making it their
                business to provide solutions for big data. They have developed
                software that processes terabytes and petabytes of data daily.
                If you think about the potential for big data, this level of
                processing isn’t even in the cards by any other type of
                software. These organizations are also capable of managing tens
                of terabytes in real time, something you won’t find from the
                stand alone big data computing systems. It’s too bad, though,
                that not every company has access to this cloud of opportunity.
                Big Data is not going away. And even if some companies do, it
                won’t be long before they’re left behind. This is why many
                companies are turning to the cloud for their data management
                needs. But the cloud is not all rainbows.
            </p>
    </div>
  )
}

export default Aboutus