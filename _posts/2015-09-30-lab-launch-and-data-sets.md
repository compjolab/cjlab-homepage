---
title: A quick list of deep and interesting datasets for computational journalists
description: |
  Here are the URLs for the public datasets I mentioned as being big, interesting, and (relatively) easy to get.
author: Dan Nguyen
---

Thank you to everyone who attended [today's informational session](http://us7.campaign-archive1.com/?u=60a5181e3d9c08e1e0f401dc0&id=1d23daf12f&e=a077356aa8) about the Stanford Computational Journalism Lab. If you weren't able to come by, feel free to sign up for our [mailing list](http://cjlab.stanford.edu/contact#newsletter-section), and/or get in contact with us [via email and social media](http://cjlab.stanford.edu/contact/).

During the presentation, I had a slide listing all the datasets I could think of in 5 minutes that were public, important, "big" (100,000 records or more), and "easy" to get -- at least compared to the days when you had to [send a government agency a shrink-wrapped hard drive](http://chriswhong.com/open-data/foil_nyc_taxi/):

![image](/files/images/news/slide-datasets.png)


Not all the datasets are literally just one-click-to-download -- you may have to [re-read the wget manual](https://gist.github.com/dannguyen/26e5922614dc22053745) or write a [quick scraper](https://github.com/compjour/search-script-scrape) -- but they are freely accessible to anyone with an Internet connection. Here's the list of datasets with URLs:


- [Daily pollution readings for every EPA sensor](http://www3.epa.gov/airdata/ad_data.html)
- [Florida inmate population](http://www.dc.state.fl.us/pub/obis_request.html)
- [Texas inmate population](http://www.tdcj.state.tx.us/documents/High_Value_Data_Sets.xlsx)
- [The time of each U.S. major air carrier flight since 1985 and how late it was](http://www.transtats.bts.gov/DL_SelectFields.asp?Table_ID=236&DB_Short_Name=On-Time)
- [Every fatality from a traffic accident since 1975](http://www.nhtsa.gov/FARS)
- [Every reported vehicle defect, investigation, and recall in the U.S.](http://www-odi.nhtsa.dot.gov/downloads/)
- [Every campaign donation to a U.S. federal candidate](http://www.fec.gov/disclosure.shtml)
- [Every NYC taxi ride in the past 5 years including how much it cost + tip](http://www.nyc.gov/html/tlc/html/about/trip_record_data.shtml)
- [SFPD police reported incidents](https://data.sfgov.org/Public-Safety/SFPD-Incidents-from-1-January-2003/tmnf-yvry)
- [Dallas police reported incidents](https://www.dallasopendata.com/Police/Dallas-Police-Public-Data-RMS-Incidents/tbnj-w5hb)
- [Los Angeles police reported incidents](https://data.lacity.org/A-Safe-City/LAPD-Crime-and-Collision-Raw-Data-2014/eta5-h8qx?)
- [Chicago police reported incidents](https://data.cityofchicago.org/Public-Safety/Crimes-2001-to-present/ijzp-q8t2)
- [Medicare payments for every doctor for every procedure they performed and billed for](https://www.cms.gov/research-statistics-data-and-systems/statistics-trends-and-reports/medicare-provider-charge-data/physician-and-other-supplier.html)
- [All registered Congressional lobbyists and what issues they lobbied on](http://www.senate.gov/legislative/Public_Disclosure/database_download.htm)
- [Every one who has visited the White House since December 2009](https://www.whitehouse.gov/briefing-room/disclosures/visitor-records)
- [The race, age, and sex of everyone the NYPD stopped on the street and frisked](http://www.nyc.gov/html/nypd/html/analysis_and_planning/stop_question_and_frisk_report.shtml)
- [Every workplace fatality [that resulted in an investigation] and workplace inspection](http://ogesdw.dol.gov/views/data_summary.php)
- [Every report of an injury or fatality believed to be related to a FDA-regulated drug](http://www.fda.gov/Drugs/GuidanceComplianceRegulatoryInformation/Surveillance/AdverseDrugEffects/ucm082193.htm)
- [California schools SAT, ACT, AP scores](http://www.cde.ca.gov/ds/sp/ai/)
- [California schools standardized test scores](http://star.cde.ca.gov/starresearchfiles.asp)
- [California schools demographics](http://www.cde.ca.gov/ds/sd/)
- [California schools vaccination rates](https://www.cdph.ca.gov/programs/immunize/Pages/ImmunizationLevels.aspx)
- [Every thing and person paid for by Congressional office funds](http://sunlightfoundation.com/tools/expenditures/)

Those are just what I could fit into the slide. There are many more, of course:

- [All U.S. registered clinical trials](https://www.clinicaltrials.gov/ct2/resources/download)
- [California state payroll](http://publicpay.ca.gov/)
- [Florida state payroll](http://dmssalaries.herokuapp.com/salaries)
- [New York state payroll](http://checkbooknyc.com/data-feeds)
- [New York City restaurant inspections](https://data.cityofnewyork.us/Health/DOHMH-New-York-City-Restaurant-Inspection-Results/43nn-pn8j)
- [Nationwide crime and stop-and-search reports for the UK](https://data.police.uk/data/)
- [Congressional bills and roll call votes](https://www.govtrack.us/developers/data)
- [311 Requests for San Francisco](https://data.sfgov.org/City-Infrastructure/Case-Data-from-San-Francisco-311-SF311-/vw6y-z8j6)
- [Recalls and civil/criminal penalties via the U.S. Consumer Product Safety Commission](http://www.cpsc.gov/en/Newsroom/Downloadable-Data/)
- [Payments made by health care companies to doctors](https://www.cms.gov/openpayments/)
- [New York subway turnstile data](http://web.mta.info/developers/turnstile.html)
- [NYPD motor vehicle collisions](https://nycopendata.socrata.com/Public-Safety/NYPD-Motor-Vehicle-Collisions/h9gi-nx95?)
- [Seattle Real Time Fire 911 Calls](https://data.seattle.gov/Public-Safety/Seattle-Real-Time-Fire-911-Calls/kzjm-xkqj)
- [NIST's national database of software security flaws](https://nvd.nist.gov/download.cfm)
- [Reported incidents of civilian aircraft hitting birds and other animals](http://wildlife.faa.gov/)

Many cities and states are using the Socrata portal; here's [San Francisco](https://data.sfgov.org/) and [New York City](https://nycopendata.socrata.com/data). The [U.S. City Open Data Census](http://us-city.census.okfn.org/), via Code For America, Sunlight Foundation, and Open Knowledge Foundation, is a great place to see what's available.
And of course, there are many non-government datasets. The [Stanford Network Analysis Project](http://snap.stanford.edu/) is a great place to start. If you're a student interested in machine learning and natural language, and just want an easy-one-click file, try [Yelp's Academic Dataset](https://www.yelp.com/academic_dataset).

I don't claim that these datasets are easy to _analyze_. Or that they are as complete as they purport to be. For example, a simple aggregate count of the White House visitor records on the `visitee_namelast` and `visitee_namefirst` fields (i.e. the name of the White House official being visited) should theoretically yield clues about who is "important" at the White House -- unless visitors are listed as visiting an [official's scheduling assistant](http://www.politico.com/news/stories/0411/53072_Page3.html). Or if [the most powerful White House officials have their meetings outside of the White House, as the New York Times reported](http://www.nytimes.com/2010/06/25/us/politics/25caribou.html):

> “They’re here all the time — all day,” Andre Williams, a manager at Caribou Coffee, said of his White House customers. (He can spot White House officials by the security badges around their necks, or the Secret Service agents lurking nearby.)
>
> “A lot of them like lattes — that or a ‘depth charge,’ a coffee with a shot of espresso,” Mr. Williams said. “The caffeine rush — they need it.”
>
> Some administration officials and lobbyists say that meeting away from the White House allows officials to get some air without making visitors go through the cumbersome White House security process. Others, however, acknowledge that one motivation is the desire to avoid lobbyists’ names showing up too often on the White House logs.

Despite these inherent problems of the dataset, enterprising news organizations can find interesting bits when they know how to focus their search, such as [Politico's report on secret visits by _The Daily Show's_ Jon Stewart](http://www.politico.com/agenda/story/2015/07/jon-stewarts-secret-white-house-visits-000178?hp=t3_r).

As we said during the presentation, computational journalism requires not just technical skill, but in-depth research and investigation of the institutions and processes that produce these datasets. However, even knowing just the existence of this data might inspire project ideas for you.

If you find something interesting, [we'd love to hear from you](/contact). And if studying and doing computational journalism at Stanford interests you, take a look at the [courses we offer in the winter and spring](/initiatives/#courses-section).


