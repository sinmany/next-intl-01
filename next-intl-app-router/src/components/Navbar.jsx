"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocale, useTranslations } from "next-intl";
import SwitchSelectLanguage from "./SwitchSelectLanguage";
import { routing } from "@/i18n/routing";

export default function ButtonAppBar() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  return (
    <main style={{ position: "sticky", top: 0 }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {t("menu")}
            </Typography>
            <SwitchSelectLanguage defaultValue={locale} label={t("label")}>
              {routing.locales.map((cur) => (
                <option key={cur} value={cur} style={{ marginTop: "4px" }}>
                  {t("locale", { locale: cur })}
                </option>
              ))}
            </SwitchSelectLanguage>
          </Toolbar>
        </AppBar>
      </Box>
    </main>
  );
}
