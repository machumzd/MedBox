"use client";

import { getDb } from "@/lib/pgliteClient";
import React, { useEffect } from "react";

const PatientForm = () => {
  const getPatient = async () => {
    const db = await getDb();
    const patients = await db.query("SELECT * FROM patients");
    console.log("koo",patients);
  };
  useEffect(() => {
    getPatient();
  }, []);

  return <div>PatientForm</div>;
};

export default PatientForm;
