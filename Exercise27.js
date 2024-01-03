function calculateYMD(nd) {
    years=Math.floor(nd/365);
    residue_days=nd%365;
    months=Math.floor(residue_days/30);

    console.log(`Son equivalente a ${years} años, ${months} meses y ${residue_days} días`)
}

calculateYMD(1325);