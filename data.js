$(document).ready(function () {
  var responseData = [
    {
      countryId: 1,
      countryName: "India",
      states: [
        {
          stateId: 1,
          stateName: "Gujarat",
          cities: [
            {
              cityId: 1,
              cityName: "Ahmadabad",
            },
            {
              cityId: 2,
              cityName: "Surat",
            },
            {
              cityId: 2,
              cityName: "Baroda",
            },
          ],
        },
        {
          stateId: 2,
          stateName: "Maharashtra",
          cities: [
            {
              cityId: 3,
              cityName: "Mumbai",
            },
            {
              cityId: 4,
              cityName: "Pune",
            },
          ],
        },
      ],
    },
    {
      countryId: 2,
      countryName: "Canada",
      states: [
        {
          stateId: 3,
          stateName: "Ontario",
          cities: [
            {
              cityId: 5,
              cityName: "Toronto",
            },
            {
              cityId: 6,
              cityName: "Hamilton",
            },
          ],
        },
      ],
    },
  ];

  var country = $("#countrySelect");
  var state = $("#stateSelect");
  var city = $("#citySelect");

  //create two elements for india and canada
  for (var i = 0; i < responseData.length; i++) {
    console.log(responseData[i].countryName);
    var op = $("<option>");
    op.text(responseData[i].countryName);
    op.attr("id", responseData[i].countryId);
    op.attr("value", responseData[i].countryName);
    country.append(op);
  }

  $("#countrySelect").on("change", () => {
    var selectedCountry = $("#countrySelect option:selected");
    console.log(selectedCountry.attr("id") - 1);
    if (selectedCountry.attr("id") == 1) {
      $("#stateSelect").empty();
      var opSt = $("<option>");
      opSt.text("Select State");
      state.append(opSt);
      for (
        var i = 0;
        i < responseData[selectedCountry.attr("id") - 1].states.length;
        i++
      ) {
        console.log(
          responseData[selectedCountry.attr("id") - 1].states[i].stateName
        );
        var st = $("<option>");
        st.text(
          responseData[selectedCountry.attr("id") - 1].states[i].stateName
        );
        st.attr({
          id: responseData[selectedCountry.attr("id") - 1].states[i].stateId,
          value:
            responseData[selectedCountry.attr("id") - 1].states[i].stateName,
        });
        state.append(st);
      }
      console.log($("#stateSelect option").length);

      $("#stateSelect").on("change", () => {
        var selectedState = $("#stateSelect option:selected");
        console.log(selectedState.val());
        if (selectedState.attr("id") == 1) {
          $("#citySelect").empty();
          var opCt = $("<option>");
          opCt.text("Select City");
          city.append(opCt);
          for (
            var j = 0;
            j <
            responseData[selectedCountry.attr("id") - 1].states[
              selectedState.attr("id") - 1
            ].cities.length;
            j++
          ) {
            console.log(
              responseData[selectedCountry.attr("id") - 1].states[
                selectedState.attr("id") - 1
              ].cities[j].cityName
            );
            var ct = $("<option>");
            ct.text(
              responseData[selectedCountry.attr("id") - 1].states[
                selectedState.attr("id") - 1
              ].cities[j].cityName
            );
            ct.attr({
              id: responseData[selectedCountry.attr("id") - 1].states[
                selectedState.attr("id") - 1
              ].cities[j].cityId,
              value:
                responseData[selectedCountry.attr("id") - 1].states[
                  selectedState.attr("id") - 1
                ].cities[j].cityName,
            });
            city.append(ct);
          }
        } else if (selectedState.attr("id") == 2) {
          $("#citySelect").empty();
          var opCt = $("<option>");
          opCt.text("Select City");
          city.append(opCt);
          for (
            var j = 0;
            j <
            responseData[selectedCountry.attr("id") - 1].states[
              selectedState.attr("id") - 1
            ].cities.length;
            j++
          ) {
            console.log(
              responseData[selectedCountry.attr("id") - 1].states[
                selectedState.attr("id") - 1
              ].cities[j].cityName
            );
            var ct = $("<option>");
            ct.text(
              responseData[selectedCountry.attr("id") - 1].states[
                selectedState.attr("id") - 1
              ].cities[j].cityName
            );
            ct.attr({
              id: responseData[selectedCountry.attr("id") - 1].states[
                selectedState.attr("id") - 1
              ].cities[j].cityId,
              value:
                responseData[selectedCountry.attr("id") - 1].states[
                  selectedState.attr("id") - 1
                ].cities[j].cityName,
            });
            city.append(ct);
          }
        }
      });
    } else if (selectedCountry.attr("id") == 2) {
      $("#stateSelect").empty();
      var opSt = $("<option>");
      opSt.text("Select State");
      state.append(opSt);
      for (
        var i = 0;
        i < responseData[selectedCountry.attr("id") - 1].states.length;
        i++
      ) {
        console.log(
          responseData[selectedCountry.attr("id") - 1].states[i].stateName
        );
        var st = $("<option>");
        st.text(
          responseData[selectedCountry.attr("id") - 1].states[i].stateName
        );
        st.attr({
          id: responseData[selectedCountry.attr("id") - 1].states[i].stateId,
          value:
            responseData[selectedCountry.attr("id") - 1].states[i].stateName,
        });
        state.append(st);

        $("#stateSelect").on("change", () => {
          var selectedState = $("#stateSelect option:selected");
          console.log(selectedState.val());
          if (selectedState.attr("id") == 3) {
            $("#citySelect").empty();
            var opCt = $("<option>");
            opCt.text("Select City");
            city.append(opCt);
            for (
              var j = 0;
              j <
              responseData[selectedCountry.attr("id") - 1].states[
                selectedState.attr("id") - 3
              ].cities.length;
              j++
            ) {
              console.log(
                responseData[selectedCountry.attr("id") - 1].states[
                  selectedState.attr("id") - 3
                ].cities[j].cityName
              );
              var ct = $("<option>");
              ct.text(
                responseData[selectedCountry.attr("id") - 1].states[
                  selectedState.attr("id") - 3
                ].cities[j].cityName
              );
              ct.attr({
                id: responseData[selectedCountry.attr("id") - 1].states[
                  selectedState.attr("id") - 3
                ].cities[j].cityId,
                value:
                  responseData[selectedCountry.attr("id") - 1].states[
                    selectedState.attr("id") - 3
                  ].cities[j].cityName,
              });
              city.append(ct);
            }
          }
        });
      }
    }
  });
});
