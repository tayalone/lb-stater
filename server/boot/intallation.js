module.exports = async function basicAppInstalation(app) {
  try {
    const { user: User, Role, RoleMapping, AccessToken } = app.models;
    await User.destroyAll();
    await Role.destroyAll();
    await RoleMapping.destroyAll();
    await AccessToken.destroyAll();
    // ----------------- สร้าง role -----------------------------------
    const advertiserRole = await Role.create({
      name: "advertiser"
    });
    console.log(`create role admin`);
    const adminRole = await Role.create({
      name: "admin"
    });
    // ----------------- สร้าง user -----------------------------------
    const user1 = await User.create({ email: "a1@a.com", password: "123456" });
    const user2 = await User.create({ email: "a2@a.com", password: "123456" });
    const user3 = await User.create({ email: "a3@a.com", password: "123456" });
    // -------  สร้าง role mapping ---------------------------------------
    await RoleMapping.create({
      principalType: "USER",
      principalId: user1.id,
      roleId: advertiserRole.id
    });
    await RoleMapping.create({
      principalType: "USER",
      principalId: user2.id,
      roleId: adminRole.id
    });
    user1.age = 30;
    await user1.save();

    // ------------------------------------------------------------------
  } catch (e) {
    console.log(e);
    console.log(`error @ install.js`);
  }
};
