module.exports = async function basicAppInstalation(app) {
  try {
    const currentUserData = {
      status: 1,
      fbId: "100023551951091",
      fb_accessToken:
        "EAAAAUaZA8jlABAIKjr6qrZCAP23bt7r8zYv5t00el7xvT260X5l2iT1cKZCWQaXbWA2oMXymx2gwsylqzZAZCPHu4UccAvS0jd6luhJFcu3063tfrkIj5Iij9ZAT2di4ZB6A4fvlcESWcPKA34En1vZBZCpFd4k1FfRZBjGqQwwZCipXwZDZD",
      name: "รั่วซิ่ง ฝั่งชุมพร",
      gender: "male",
      IP: "127.0.0.1",
      user_agent:
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36",
      birthday: "11/16/1992",
      age: 27,
      friendTotal: 1,
      locale: "th_TH",
      privacy: 0,
      config: {}
    };

    const { user: User, Role, RoleMapping, AccessToken } = app.models;
    await User.destroyAll();
    const user1 = await User.create({
      email: "fb100023551951091@facebook.com",
      password: "123456",
      ...currentUserData
    });

    user1.age = 30;
    await user1.save();

    // await User.destroyAll();
    // await Role.destroyAll();
    // await RoleMapping.destroyAll();
    // await AccessToken.destroyAll();
    // // ----------------- สร้าง role -----------------------------------
    // const advertiserRole = await Role.create({
    //   name: "advertiser"
    // });
    // console.log(`create role admin`);
    // const adminRole = await Role.create({
    //   name: "admin"
    // });
    // // ----------------- สร้าง user -----------------------------------
    // const user1 = await User.create({ email: "a1@a.com", password: "123456" });
    // const user2 = await User.create({ email: "a2@a.com", password: "123456" });
    // const user3 = await User.create({ email: "a3@a.com", password: "123456" });
    // // -------  สร้าง role mapping ---------------------------------------
    // await RoleMapping.create({
    //   principalType: "USER",
    //   principalId: user1.id,
    //   roleId: advertiserRole.id
    // });
    // await RoleMapping.create({
    //   principalType: "USER",
    //   principalId: user2.id,
    //   roleId: adminRole.id
    // });
    // user1.age = 30;
    // await user1.save();
    // ------------------------------------------------------------------
    const currentUser = await User.findOne();
    console.log(`currentUser`, currentUser);
    user1.age = 50;
    await user1.save();
  } catch (e) {
    console.log(e);
    console.log(`error @ install.js`);
  }
};
