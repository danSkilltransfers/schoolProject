import React, { useState } from "react";
import Header from "./layouts/header.jsx";
import Footer from "./layouts/footer.jsx";
import Spaans from "./pages/spaans.jsx";
import Profil from "./pages/profil.jsx";
import Calendar from "./pages/calendar.jsx";

import { ThemeProvider } from "@material-ui/styles";
import theme from "./themes/theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <div style={{ minHeight: "100vh" }}>Home</div>}
          />
          <Route
            exact
            path="/landing"
            component={() => <div style={{ minHeight: "100vh" }}>Landing</div>}
          />
          <Route exact path="/mijn-profiel" component={() => <Profil />} />
          <Route exact path="/calendar" component={() => <Calendar />} />
          <Route
            exact
            path="/vakken"
            component={() => <div style={{ minHeight: "100vh" }}>Vakken</div>}
          />
          <Route
            exact
            path="/tester"
            component={() => <div style={{ minHeight: "100vh" }}>Tester</div>}
          />
          <Route exact path="/spaans" component={() => <Spaans />} />
          <Route
            exact
            path="/onze-leraren"
            component={() => (
              <div style={{ minHeight: "100vh" }}>Onze Leraren</div>
            )}
          />
          <Route
            exact
            path="/onze-studenten"
            component={() => (
              <div style={{ minHeight: "100vh" }}>Onze Studenten</div>
            )}
          />
          <Route
            exact
            path="/contact"
            component={() => <div style={{ minHeight: "100vh" }}>Contact</div>}
          />
          <Route
            exact
            path="/teaching-method"
            component={() => (
              <div style={{ minHeight: "100vh" }}>Teaching method</div>
            )}
          />
          <Route
            exact
            path="/privacy-policy"
            component={() => (
              <div style={{ minHeight: "100vh" }}>Privacy Policy</div>
            )}
          />
          <Route
            exact
            path="/pricing"
            component={() => <div style={{ minHeight: "100vh" }}>Pricing</div>}
          />
          <Route
            exact
            path="/enterprise-solutions"
            component={() => (
              <div style={{ minHeight: "100vh" }}>Enterprise solutions</div>
            )}
          />
          <Route
            exact
            path="/opportunities"
            component={() => (
              <div style={{ minHeight: "100vh" }}>Opportunities</div>
            )}
          />
          <Route
            exact
            path="/events"
            component={() => <div style={{ minHeight: "100vh" }}>Events</div>}
          />
          <Route
            exact
            path="/faq"
            component={() => <div style={{ minHeight: "100vh" }}>FAQ</div>}
          />
          <Route
            exact
            path="/blog"
            component={() => <div style={{ minHeight: "100vh" }}>Blog</div>}
          />
          <Route
            exact
            path="/whatsapp-group"
            component={() => (
              <div style={{ minHeight: "100vh" }}>Whatsapp Group</div>
            )}
          />
        </Switch>

        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
