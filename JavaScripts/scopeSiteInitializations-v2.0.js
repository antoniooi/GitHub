//
// I'mTP User Accounts
// Google Analytics Custom Variables Initializations
// User Program Terms & Conditions Display Handler
//
// Date Created: 4 May 2012
// Date Updated: 8 Mar 2013
// Version 1.9
//
var imtpAccountName = "(Others)";
var imtpUsageOption = "(Others)";
var imtpPageH1Title = "(Others)";
var _imtpProgramTerms = "";

// Added: 31 May 2012
var _currentContext = "Default";

// Added: 8 Mar 2013
// Last Modified: 8 Mar 2013
function imtpCorpAltheaServices(h1Title) {
    imtpAccountName = "Althea Services";
    imtpUsageOption = "Traffic Oriented";
    _imtpProgramTerms = "<ol> \
                                <li>PSMB SBL claimable.</li> \
                                <li>PSMB SBL Khas claimable.</li> \
                            </ol> ";
    imtpPageH1Title = h1Title;
}

// Added: 8 Mar 2013
// Last Modified: 8 Mar 2013
function imtpSharmaManagement(h1Title) {
    imtpAccountName = "Sharma Management International Sdn Bhd";
    imtpUsageOption = "Traffic Oriented";
    imtpPageH1Title = h1Title;
}

// Added: 8 Mar 2013
// Last Modified: 8 Mar 2013
function imtpCultureDynamics(h1Title) {
    imtpAccountName = "Culture Dynamics";
    imtpUsageOption = "Traffic Oriented";
    _imtpProgramTerms = "<b>For Public Program Only:</b><br /> \
        <ol> \
            <li>Available group discount is only valid for registration of 3 paxs or more from a same organization.</li> \
            <li>Full payment must be made 2 weeks before date of training.</li> \
            <li>We allow transfer of name, not refund once registration is confirmed.</li> \
        </ol> ";
    imtpPageH1Title = h1Title;
}



// Added: 19 Feb 2013
// Last Modified: 19 Feb 2013
function imtpBTOServices(h1Title) {
    imtpAccountName = "BTO Services";
    imtpUsageOption = "Traffic Oriented";
    imtpPageH1Title = h1Title;
    _imtpProgramTerms = "<b>For Public Program Only:</b><br /> \
        <ol> \
            <li>Payment made will not be refundable unless the training event has been cancelled by the organizer and future replacement has yet to be determined.</li> \
        </ol> ";

}

// Added: 16 Jan 2013
// Last Modified: 16 Jan 2013
function imtpCorpSharmaManagement() {
    imtpAccountName = "Sharma Management International Sdn Bhd";
    imtpUsageOption = "Traffic Oriented";
}

// Added: 16 Jan 2013
// Last Modified: 31 Jan 2013
function imtpCorpCultureDynamics() {
    imtpAccountName = "Culture Dynamics";
    imtpUsageOption = "Traffic Oriented";
    _imtpProgramTerms = "<b>For Public Program Only:</b><br /> \
        <ol> \
            <li>Available group discount is only valid for registration of 3 paxs or more from a same organization.</li> \
            <li>Full payment must be made 2 weeks before date of training.</li> \
            <li>We allow transfer of name, not refund once registration is confirmed.</li> \
        </ol> ";
}

// Added: 27 Jun 2012
// Last Modified: 06 Aug 2012
function imtpCorpKnowledgeHubAsia() {
    imtpAccountName = "Knowledge Hub Asia Sdn Bhd";
    imtpUsageOption = "Traffic Oriented";
    _imtpProgramTerms = "<b>For In-house & Public Program:</b><br /> \
        <ol> \
            <li>Program is SBL claimable.</li> \
            <li>Payment Term: Payment to be bank-in to Knowledge Hub Asia Sdn Bhd, CIMB Bank A/C 14300008605058 before the training. Payment slip to be email to: <a href='mailto:esther.yong@knowledgehub-asia.com' target='_blank'>esther.yong@knowledgehub-asia.com</a></li> \
        </ol> \
        <b>For Public Program Only:</b><br /> \
        <ol> \
            <li>Group Discount only valid for registration of 3 paxs or more from a same organization.</li> \
            <li>Full payment is require upon confirmation of registration.</li> \
            <li>Payment Term: CASH</li> \
        </ol> ";

}

function imtpCorpTNI() {
    imtpAccountName = "TNI Consultancy";
    imtpUsageOption = "Traffic Oriented";
    _imtpProgramTerms = "<ol> \
                                <li>For in-house training, course fees paid are not refundable but reschedules are allowed. For public training, course fees paid are not refundable unless the program cancellation was being initiated by TNI.</li> \
                                <li>TNI reserves the right to change the dates, venue or trainer without any prior notice. However, registered participants will be notified of such change through email.</li> \
                                <li>Group discounts available. Please contact TNI for more information.</li> \
                                <li>Please note that the quotation, course contents and other details are the intellectual \
                                    property of TNI Consultancy and its associates. Any duplication, or reproduction \
                                    of its contents require the permission of TNI.</li> \
                            </ol> ";
}

function imtpWriteProgramTerms() {
    if (_imtpProgramTerms != "") {
        document.write(_imtpProgramTerms);
    }
}

// Added: 31 May 2012
function imtpSetCurrentContext(currentContext) {
    _currentContext = currentContext;
}

// Added: 31 May 2012
function imtpPromotion() {
    imtpAccountName = "IMTP Promotion Pages";
}

function imtpCorpHRD() {
    imtpAccountName = "HRD Gateway Sdn Bhd";
    imtpUsageOption = "Traffic Oriented";
}

function imtpCorpAlthea() {
    imtpAccountName = "Althea Services";
    imtpUsageOption = "Traffic Oriented";
    _imtpProgramTerms = "<ol> \
                                <li>PSMB SBL claimable.</li> \
                                <li>PSMB SBL Khas claimable.</li> \
                            </ol> ";
}

function imtpProDrKamalKenny() {
    imtpAccountName = "Dr Kamal Kenny";
    imtpUsageOption = "Traffic Oriented";
}

function imtpProNiktWong() {
    imtpAccountName = "Nikt Wong";
    imtpUsageOption = "Result Oriented";
}

